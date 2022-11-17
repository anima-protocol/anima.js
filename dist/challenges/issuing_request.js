import moment from "moment";
import Chains from "../chains";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";
export function GetIssuingRequest(specs, fields, owner, issuer, chainId, addressType) {
    if (addressType === void 0) { addressType = "address"; }
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
    if (Chains.EVMChain.indexOf(owner.chain) !== -1) {
        challenge = Ethereum.IssuingRequest(specs, message, chainId, true, addressType);
    }
    else {
        throw "Unable to get issuing request";
    }
    return JSON.stringify(challenge);
}
export function GetLivenessIssuingRequestEIP1024(specs, fields, owner, issuer, chainId, addressType) {
    if (addressType === void 0) { addressType = "address"; }
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
    if (Chains.EVMChain.indexOf(owner.chain) !== -1) {
        challenge = Ethereum.IssuingRequest(specs, message, chainId, true, addressType);
    }
    else {
        throw "Unable to get issuing request";
    }
    return JSON.stringify(challenge);
}
export function GetLivenessIssuingRequestEIP712(specs, fields, owner, issuer, chainId, addressType) {
    if (addressType === void 0) { addressType = "address"; }
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
            public_address: owner.public_address,
        },
        issuer: {
            public_address: issuer.public_address,
            chain: issuer.chain,
            id: issuer.id,
        },
    };
    var challenge = {};
    if (Chains.EVMChain.indexOf(owner.chain) !== -1) {
        challenge = Ethereum.IssuingRequest(specs, message, chainId, false, addressType);
    }
    else {
        throw "Unable to get issuing request";
    }
    return JSON.stringify(challenge);
}
