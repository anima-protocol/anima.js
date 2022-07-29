import {Owner, Issuer} from "../types";
import moment from "moment";
import Chains from "../chains";
import Wallets from "../wallets";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";

export function GetIssuingRequest(
    specs: string,
    fields: any,
    owner: Owner,
    issuer: Issuer
) {
    if (Resources.IsSupported(specs) === false) {
        throw Error("Resource not supported");
    }

    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }

    if (Wallets.IsSupported(owner.wallet) === false) {
        throw Error("Wallet not supported");
    }

    const message = {
        specs: specs,
        requested_at: moment().utc().unix(),
        fields,
        attributes: Resources.IssuingResourceAttributes(specs),
        owner: {
            id: `anima:owner:${owner.public_address}`,
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

    let challenge = {};

    if (Chains.EVMChain.indexOf(owner.chain) !== -1) {
        challenge = Ethereum.IssuingRequest(specs, message)
    } else {
        throw "Unable to get issuing request";
    }

    return JSON.stringify(challenge);
}

export function GetLivenessIssuingRequestEIP1024(
    specs: string,
    fields: any,
    owner: Owner,
    issuer: Issuer
) {
    if (Resources.IsSupported(specs) === false) {
        throw Error("Resource not supported");
    }

    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }

    if (Wallets.IsSupported(owner.wallet) === false) {
        throw Error("Wallet not supported");
    }

    const message = {
        specs: specs,
        requested_at: moment().utc().unix(),
        fields,
        attributes: Resources.IssuingResourceAttributes(specs),
        owner: {
            id: `anima:owner:${owner.public_address}`,
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

    let challenge = {};

    if (Chains.EVMChain.indexOf(owner.chain) !== -1) {
        challenge = Ethereum.IssuingRequest(specs, message)
    } else {
        throw "Unable to get issuing request";
    }

    return JSON.stringify(challenge);
}

export function GetLivenessIssuingRequestEIP712(
    specs: string,
    fields: any,
    owner: Owner,
    issuer: Issuer
) {
    if (Resources.IsSupported(specs) === false) {
        throw Error("Resource not supported");
    }

    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }

    if (Wallets.IsSupported(owner.wallet) === false) {
        throw Error("Wallet not supported");
    }

    const message = {
        specs: specs,
        requested_at: moment().utc().unix(),
        fields,
        attributes: Resources.IssuingResourceAttributes(specs),
        owner: {
            id: `anima:owner:${owner.public_address}`,
            chain: owner.chain,
            wallet: owner.wallet,
            public_address: owner.public_address,
        },
        issuer: {
            public_address: issuer.public_address,
            chain: issuer.chain,
            id: issuer.id,
        },
    };

    let challenge = {};

    if (Chains.EVMChain.indexOf(owner.chain) !== -1) {
        challenge = Ethereum.IssuingRequest(specs, message)
    } else {
        throw "Unable to get issuing request";
    }

    return JSON.stringify(challenge);
}
