var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Resources from "../../resources/index";
export function IssuingRequest(specs, message) {
    var challenge = {
        domain: {
            name: "anima",
            version: "1.0",
            chainId: "1",
        },
        message: __assign({}, message),
        primaryType: "Main",
        types: {
            Main: [
                { name: "issuer", type: "Issuer" },
                { name: "owner", type: "Owner" },
                { name: "specs", type: "string" },
                { name: "requested_at", type: "uint64" },
                { name: "fields", type: "Fields" },
                { name: "attributes", type: "Attributes" }
            ],
            Fields: Resources.IssuingRequestFields[specs],
            Attributes: Resources.IssuingResourceAttributesTypes(specs),
            Owner: [
                { name: "id", type: "string" },
                { name: "public_address", type: "address" },
                { name: "chain", type: "string" },
                { name: "wallet", type: "string" },
                { name: "public_key_encryption", type: "string" },
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
    return challenge;
}
