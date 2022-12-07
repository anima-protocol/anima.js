import { Owner, Verifier } from "../types";
import moment from "moment";
import Chains from "../chains";
import Wallets from "../wallets";
import Resources from "../resources/index";
import Ethereum from "../chains/ethereum/index";
import { Attribute } from "../types";

function IsInResourceAttributes(
  resourceAttributes: Attribute[],
  slug: string
): boolean {
  let found = false;
  resourceAttributes.forEach((attr) => {
    if (attr.name === slug) {
      found = true;
      return;
    }
  });
  return found;
}

export function GetSharingRequest(
  specs: string,
  attributes: { [key: string]: string },
  owner: Owner,
  verifier: Verifier,
  chainId: string,
  addressType = "address"
): string {
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

  let challenge = {};

  if (Chains.EVMChain.indexOf(owner.chain) !== -1) {
    challenge = Ethereum.SharingRequest(message, chainId, attributes, addressType)
  } else {
    throw "Unable to get sharing request";
  }

  return JSON.stringify(challenge);
}
