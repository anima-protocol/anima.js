import moment from "moment";
import Chains from "../chains";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";
export function GetIssuingRequest(specs, fields, owner, issuer, chainId, publicKeyEncryption, nonce, addressType = "address") {
    if (Resources.IsSupported(specs) === false) {
        throw Error("Resource not supported");
    }
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    const message = {
        specs: specs,
        requested_at: moment().utc().unix(),
        public_key_encryption: publicKeyEncryption,
        nonce: nonce,
        fields,
        attributes: Resources.IssuingResourceAttributes(specs),
        owner: {
            id: `anima:owner:${owner.public_address}`,
            chain: owner.chain,
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
        challenge = Ethereum.IssuingRequest(specs, message, chainId, true, addressType);
    }
    else {
        throw "Unable to get issuing request";
    }
    return JSON.stringify(challenge);
}
export function GetLivenessIssuingRequestEIP1024(specs, fields, owner, issuer, chainId, publicKeyEncryption, nonce, addressType = "address") {
    if (Resources.IsSupported(specs) === false) {
        throw Error("Resource not supported");
    }
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    const message = {
        specs: specs,
        requested_at: moment().utc().unix(),
        public_key_encryption: publicKeyEncryption,
        nonce: nonce,
        fields,
        attributes: Resources.IssuingResourceAttributes(specs),
        owner: {
            id: `anima:owner:${owner.public_address}`,
            chain: owner.chain,
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
        challenge = Ethereum.IssuingRequest(specs, message, chainId, true, addressType);
    }
    else {
        throw "Unable to get issuing request";
    }
    return JSON.stringify(challenge);
}
export function GetLivenessIssuingRequestEIP712(specs, fields, owner, issuer, chainId, addressType = "address") {
    if (Resources.IsSupported(specs) === false) {
        throw Error("Resource not supported");
    }
    if (Chains.IsSupported(owner.chain) === false) {
        throw Error("Chain not supported");
    }
    const message = {
        specs: specs,
        requested_at: moment().utc().unix(),
        fields,
        attributes: Resources.IssuingResourceAttributes(specs),
        owner: {
            id: `anima:owner:${owner.public_address}`,
            chain: owner.chain,
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
        challenge = Ethereum.IssuingRequest(specs, message, chainId, false, addressType);
    }
    else {
        throw "Unable to get issuing request";
    }
    return JSON.stringify(challenge);
}
