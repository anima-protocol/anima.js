import {
  GetIssuingRequest,
  GetSharingRequest,
} from "@anima-protocol/anima/challenges";

const issuingRequest = GetIssuingRequest(
  "anima:schema:name@1.0.0",
  {
    name: "John Doe",
  },
  {
    public_address: "0x1234567890",
    chain: "EVM",
  },
  {
    public_address: "0x0987654321",
    chain: "EVM",
  }
);

console.log(issuingRequest);

const sharingRequest = GetSharingRequest(
  "anima:schema:sharing/authorization@1.0.0",
  {
    name: "John Doe",
  },
  {
    public_address: "0x0987654321",
    chain: "EVM",
  },
  {
    id: "anima:verifier:123",
    public_address: "0x1232123212",
    chain: "EVM",
  }
);

console.log(sharingRequest);
