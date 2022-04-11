import moment from "moment";
import Chains from "../chains";
import Wallets from "../wallets";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";
export function GetIssuingRequest(specs, fields, owner, issuer) {
    if (Resources.IsSupported(specs) === false) {
        throw Error("Resource not supported");
    }
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    if (Wallets.IsSupported(owner.wallet) === false) {
        throw Error("Wallet not supported");
    }
    var message = {
        specs: specs,
        requested_at: moment().utc().unix(),
        fields: fields,
        attributes: Resources.IssuingResourceAttributes(specs),
        owner: {
            id: "anima:owner:".concat(owner.public_address),
            chain: owner.chain,
            wallet: owner.wallet,
            public_address: owner.public_address,
            public_key_encryption: owner.public_key_encryption,
        },
        issuer: {
            public_address: issuer.public_address,
            chain: issuer.chain,
            id: issuer.id,
        },
    };
    var challenge = {};
    switch (owner.chain) {
        case Chains.ETH:
            challenge = Ethereum.IssuingRequest(specs, message);
            break;
        default:
            throw "Unable to get issuing request";
    }
    return JSON.stringify(challenge);
}
