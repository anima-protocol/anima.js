import moment from "moment";
import Chains from "../chains";
function IsInResourceAttributes(resourceAttributes, slug) {
    var found = false;
    resourceAttributes.forEach(function (attr) {
        if (attr.name === slug) {
            found = true;
            return;
        }
    });
    return found;
}
export function GetSharingRequest(specs, attributes, owner, verifier) {
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    var message = {
        specs: specs,
        shared_at: moment().utc().unix(),
        attributes: attributes,
        owner: {
            id: "anima:owner:".concat(owner.public_address),
            public_address: owner.public_address,
            chain: owner.chain,
        },
        verifier: {
            id: verifier.id,
            public_address: verifier.public_address,
            chain: verifier.chain,
        },
    };
    return JSON.stringify(message);
}
