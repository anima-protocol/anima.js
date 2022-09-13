import Resources from "../../resources/index";
import Chains from "../index";

export function IssuingRequest(
  specs: string,
  message: any,
  chainId: string,
  pkey = true
): object {
  const challenge = {
    domain: {
      name: "anima",
      version: "1.0",
      chainId: chainId,
    },
    message: {
      ...message,
    },
    primaryType: "Main",
    types: {
      Main: [
        { name: "issuer", type: "Issuer" },
        { name: "owner", type: "Owner" },
        { name: "specs", type: "string" },
        { name: "requested_at", type: "uint64" },
        { name: "fields", type: "Fields" },
        { name: "attributes", type: "Attributes" },
      ],
      Fields: Resources.IssuingRequestFields[specs],
      Attributes: Resources.IssuingResourceAttributesTypes(specs),
      Owner: [
        { name: "id", type: "string" },
        { name: "public_address", type: "address" },
        { name: "chain", type: "string" },
        { name: "wallet", type: "string" },
      ],
      Issuer: [
        { name: "id", type: "string" },
        { name: "public_address", type: "address" },
        { name: "chain", type: "string" },
      ],
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "version", type: "string" },
      ],
    },
  };

  if (pkey) {
    challenge.types.Owner.push({
      name: "public_key_encryption",
      type: "string",
    });
  }

  if (message?.owner?.public_key_encryption) {
    (challenge.types.Owner as any).public_key_encryption =
      message.owner.public_key_encryption;
  }

  return challenge;
}
