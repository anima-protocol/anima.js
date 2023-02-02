import moment from "moment";
import { Chains } from "..";
function IsInResourceAttributes(resourceAttributes, slug) {
    let found = false;
    resourceAttributes.forEach((attr) => {
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
    const message = {
        specs: specs,
        shared_at: moment().utc().unix(),
        attributes,
        owner: {
            id: `anima:owner:${owner.public_address}`,
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
