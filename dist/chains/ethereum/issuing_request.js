import Resources from "../../resources/index";
export function IssuingRequest(specs, message, chainId, pkey = true, addressType = "address") {
    var _a;
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
                { name: "issuer", type: "Issuer" },
                { name: "owner", type: "Owner" },
                { name: "specs", type: "string" },
                { name: "requested_at", type: "uint64" },
                { name: "fields", type: "Fields" },
                { name: "attributes", type: "Attributes" },
            ],
            Fields: Resources.IssuingRequestFields[specs],
            Attributes: Resources.IssuingResourceAttributesTypes(specs),
            Owner: [
                { name: "id", type: "string" },
                { name: "public_address", type: addressType },
                { name: "chain", type: "string" },
                { name: "wallet", type: "string" },
            ],
            Issuer: [
                { name: "id", type: "string" },
                { name: "public_address", type: "address" },
                { name: "chain", type: "string" },
            ],
            EIP712Domain: [
                { name: "name", type: "string" },
                { name: "chainId", type: "uint256" },
                { name: "version", type: "string" },
            ],
        },
    };
    if (pkey) {
        challenge.types.Owner.push({
            name: "public_key_encryption",
            type: "string",
        });
    }
    if ((_a = message === null || message === void 0 ? void 0 : message.owner) === null || _a === void 0 ? void 0 : _a.public_key_encryption) {
        challenge.types.Owner.public_key_encryption =
            message.owner.public_key_encryption;
    }
    return challenge;
}
