import moment from "moment";
import Resources from "../resources/index";
import { Chains } from "..";
export function GetIssuingRequest(specs, fields, owner, issuer) {
    if (Resources.IsSupported(specs) === false) {
        throw Error("Resource not supported");
    }
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    var message = {
        specs: specs,
        requested_at: moment().utc().unix(),
        fields: fields,
        attributes: Resources.IssuingResourceAttributes(specs),
        owner: {
            id: "anima:owner:".concat(owner.public_address),
            chain: owner.chain,
            public_address: owner.public_address
        },
        issuer: {
            public_address: issuer.public_address,
            chain: issuer.chain,
            id: issuer.id,
        },
    };
    if (owner === null || owner === void 0 ? void 0 : owner.public_key_encryption) {
        message.owner.public_key_encryption = owner.public_key_encryption;
    }
    return JSON.stringify(message);
}
