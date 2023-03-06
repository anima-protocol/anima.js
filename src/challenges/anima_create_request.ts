import {Owner} from "../types";
import Chains from "../chains";
import Resources from "../resources";

export function CreateAnimaRequest(
  specs: string,
  owner: Owner,
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
    owner: {
      id: `anima:owner:${owner.public_address}`,
      chain: owner.chain,
      public_address: owner.public_address,
    }
  };

  return JSON.stringify(message);
}
