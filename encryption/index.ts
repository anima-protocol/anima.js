// INSPIRED BY https://github.com/MetaMask/eth-sig-util/blob/main/src/encryption.ts

import nacl from 'tweetnacl' // cryptographic functions
import util from 'tweetnacl-util' // encoding & decoding

const SIGNATURE_MINIMUM_LENGTH = 64;
const ETH_PRIVATE_KEY_LENGTH = 64;
const ETH_PUBLIC_ENCRYPTION_KEY_LENGTH = 64;
const ETH_ENCRYPTION_ALGORITHM_VERSION = "x25519-xsalsa20-poly1305"

interface EncryptedData {
    version: string,
    nonce: string,
    ephemPublicKey: string,
    ciphertext: string
}

/*
 Returns a Uint8Array from an hex string
*/
const fromHexString = (hexString: string) =>
  Uint8Array.from(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));


/*
 Returns a private Eth key based on a given hex signature.
 The given signature should be at least 64 character hex string produced by the user signing a
 predetermined message in order to guarantee getting the same private key each time it is invoked.
*/
function getEthPrivateKeyFromHexSignature(ethSignature: string): string {
    const ethSignatureFixed = ethSignature.replace(/^0x/, '');
    if (ethSignatureFixed.length < SIGNATURE_MINIMUM_LENGTH)
        throw Error("Invalid signature length")
    const prk = ethSignatureFixed.substring(0, 64);
    return prk;
}

/*
 Returns a 512 bytes random nonce to be signed.
*/
function generateRandomNonce(): string {
    const bytesArray = new Uint8Array(512)
    const resArray: Array<string> = []
    crypto.getRandomValues(bytesArray)

    bytesArray.forEach((elem) => {
      resArray.push(elem.toString(16).padStart(2, '0'))
    })
    return resArray.join("")
}

/*
 Returns a public eth key from an specific eth private key.
 The given eth private key should be a valid 64 charater hex string.
*/
function getPublicEncryptionKey(privateKey: string): string {
    const ethSignatureFixed = privateKey.replace(/^0x/, '');
    if (ethSignatureFixed.length != ETH_PRIVATE_KEY_LENGTH)
        throw Error("Invalid private key length")
    const privateKeyUint8Array = fromHexString(ethSignatureFixed)

    const encryptionPublicKey = nacl.box.keyPair.fromSecretKey(privateKeyUint8Array).publicKey
    return util.encodeBase64(encryptionPublicKey)
}

/*
 Returns an encrypted data object
 The given receiver key should be 64 charater hex string
 Data can be any string data
*/
function encrypt(receiverPublicKey: string, data: string): EncryptedData {
    const ephemeralKeyPair = nacl.box.keyPair()

    let pubKeyUInt8Array;

    try {
        pubKeyUInt8Array = util.decodeBase64(receiverPublicKey);
        if (pubKeyUInt8Array.length != (ETH_PUBLIC_ENCRYPTION_KEY_LENGTH / 2)) {
            throw new Error()
        }
    } catch (err){
        throw new Error('Bad public key format')
    }

    const dataUInt8Array = util.decodeUTF8(data);
    const nonce = nacl.randomBytes(nacl.box.nonceLength);

    const encryptedMessage = nacl.box(dataUInt8Array, nonce, pubKeyUInt8Array, ephemeralKeyPair.secretKey);

    const encryptedData: EncryptedData = {
        version: ETH_ENCRYPTION_ALGORITHM_VERSION,
        nonce: util.encodeBase64(nonce),
        ephemPublicKey: util.encodeBase64(ephemeralKeyPair.publicKey),
        ciphertext: util.encodeBase64(encryptedMessage)
    };

    return encryptedData;
}

/*
 Returns a decrypted string from an encrypted object
 The given receiver key should be 64 charater hex string
 Data should be an valid EncryptedData Object
*/
function decrypt(receiverPrivateKey: string, encryptedData: EncryptedData): string {
    const recieverPrivateKeyUint8Array = fromHexString(receiverPrivateKey)
    const recieverEncryptionPrivateKey = nacl.box.keyPair.fromSecretKey(recieverPrivateKeyUint8Array).secretKey

    const nonce = util.decodeBase64(encryptedData.nonce);
    const ciphertext = util.decodeBase64(encryptedData.ciphertext);
    const ephemPublicKey = util.decodeBase64(encryptedData.ephemPublicKey);

    const decryptedMessage = nacl.box.open(ciphertext, nonce, ephemPublicKey, recieverEncryptionPrivateKey);

    let output;
    try {
        output = util.encodeUTF8(decryptedMessage);
    } catch(err) {
        throw new Error('Decryption failed.')
    }

    if (output) {
        return output;
    } else {
        throw new Error('Decryption failed.')
    }
    
}

export default {
    encrypt,
    decrypt,
    getEthPrivateKeyFromHexSignature,
    getPublicEncryptionKey,
    generateRandomNonce,
    fromHexString,
    nacl: {
        decodeUTF8: util.decodeUTF8,
        decodeBase64: util.decodeBase64,
        encodeUTF8: util.encodeUTF8,
        encodeBase64: util.encodeBase64
    },
}