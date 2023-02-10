interface EncryptedData {
    version: string;
    nonce: string;
    ephemPublicKey: string;
    ciphertext: string;
}
declare function getEthPrivateKeyFromHexSignature(ethSignature: string): string;
declare function generateRandomNonce(): string;
declare function getPublicEncryptionKey(privateKey: string): string;
declare function encrypt(receiverPublicKey: string, data: string): EncryptedData;
declare function decrypt(receiverPrivateKey: string, encryptedDataHex: string): string;
declare const _default: {
    encrypt: typeof encrypt;
    decrypt: typeof decrypt;
    getEthPrivateKeyFromHexSignature: typeof getEthPrivateKeyFromHexSignature;
    getPublicEncryptionKey: typeof getPublicEncryptionKey;
    generateRandomNonce: typeof generateRandomNonce;
    fromHexString: (hexString: string) => Uint8Array;
    hexify: (hexString: string) => string;
    nacl: {
        decodeUTF8: (s: string) => Uint8Array;
        decodeBase64: (s: string) => Uint8Array;
        encodeUTF8: (arr: Uint8Array) => string;
        encodeBase64: (arr: Uint8Array) => string;
    };
};
export default _default;
