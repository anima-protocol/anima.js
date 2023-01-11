export function SharingRequest(message, chainId, attributes, addressType = "address") {
    const ethAttributesType = [];
    Object.keys(attributes).forEach((key) => {
        ethAttributesType.push({
            name: key,
            type: "string",
        });
    });
    const challenge = {
        domain: {
            name: "anima",
            version: "1.0",
            chainId: chainId,
        },
        message: Object.assign({}, message),
        primaryType: "Main",
        types: {
            Main: [
                { name: "specs", type: "string" },
                { name: "shared_at", type: "uint64" },
                { name: "attributes", type: "Attributes" },
                { name: "verifier", type: "Verifier" },
                { name: "owner", type: "Owner" },
            ],
            Owner: [
                { name: "id", type: "string" },
                { name: "public_address", type: addressType },
                { name: "chain", type: "string" },
                { name: "wallet", type: "string" },
            ],
            Verifier: [
                { name: "id", type: "string" },
                { name: "public_address", type: "address" },
                { name: "chain", type: "string" },
            ],
            Attributes: ethAttributesType,
            EIP712Domain: [
                {
                    name: "name",
                    type: "string",
                },
                {
                    name: "chainId",
                    type: "uint256",
                },
                {
                    name: "version",
                    type: "string",
                },
            ],
        },
    };
    return challenge;
}
