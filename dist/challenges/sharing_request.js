import moment from "moment";
import Chains from "../chains";
import Wallets from "../wallets";
import Ethereum from "../chains/ethereum/index";
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
    if (Wallets.IsSupported(owner.wallet) === false) {
        throw Error("Wallet not supported");
    }
    var message = {
        specs: specs,
        shared_at: moment().utc().unix(),
        attributes: attributes,
        owner: {
            id: "anima:owner:".concat(owner.public_address),
            public_address: owner.public_address,
            chain: owner.chain,
            wallet: owner.wallet,
        },
        verifier: {
            id: verifier.id,
            public_address: verifier.public_address,
            chain: verifier.chain,
        },
    };
    var challenge = {};
    if (Chains.EVMChain.indexOf(owner.chain) !== -1) {
        challenge = Ethereum.SharingRequest(message, attributes);
    }
    else {
        throw "Unable to get sharing request";
    }
    return JSON.stringify(challenge);
}
