import { Owner, Issuer } from "../types";
import Resources from "../resources/index";
import Chains from "../chains";

export function GetIssuingRequest(
  specs: string,
  fields: any,
  owner: Owner,
  issuer: Issuer,
  publicKeyEncryption: string,
  nonce: string
) {
  if (Resources.IsSupported(specs) === false) {
    throw Error("Resource not supported");
  }

  if (Chains.IsSupported(owner.chain) === false) {
    throw Error("Chain not supported");
  }

  const requested_at = Math.floor(new Date().getTime() / 1000);

  const message = {
    specs,
    requested_at,
    public_key_encryption: publicKeyEncryption,
    nonce,
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

  return JSON.stringify(message);
}
