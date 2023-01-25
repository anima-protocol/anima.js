import { Owner, Issuer } from "../types";
import moment from "moment";
import Wallets from "../wallets";
import Resources from "../resources/index";

export function GetIssuingRequest(
  specs: string,
  fields: any,
  owner: Owner,
  issuer: Issuer
) {
  if (Resources.IsSupported(specs) === false) {
    throw Error("Resource not supported");
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
      public_address: owner.public_address
    },
    issuer: {
      public_address: issuer.public_address,
      chain: issuer.chain,
      id: issuer.id,
    },
  };

  if (owner?.public_key_encryption) {
    (message.owner as Owner).public_key_encryption = owner.public_key_encryption
  }

  return JSON.stringify(message);
}