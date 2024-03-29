import { Owner, Issuer } from "../types";
import moment from "moment";
import Resources from "../resources/index";
import Chains from "../chains";

export function GetIssuingRequest(
    specs: string,
    fields: any,
    owner: Owner,
    issuer: Issuer,
    publicKeyEncryption: string,
    nonce: string,
) {
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
      public_address: owner.public_address
    },
    issuer: {
      public_address: issuer.public_address,
      chain: issuer.chain,
      id: issuer.id,
    },
  };

  return JSON.stringify(message);
}
