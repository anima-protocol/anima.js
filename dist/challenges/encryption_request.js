export function GetEncryptionRequest(nonce, public_address) {
    return `Sign this message to decrypt your document and gain access to the information it contains. This confirms your ownership of the wallet and allows you to interact with the document's data

Wallet address:
${public_address}

Nonce:
${nonce}
`;
}
