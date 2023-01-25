import { IssuingRequestField, Attribute } from "../types";

export interface LivenessEIP712 {
  facegraph: string
}

export const LivenessEIP712IssuingRequestFields: IssuingRequestField[] = [
  {
    name: "facegraph",
    type: "string",
  }
];

export const LivenessEIP712Attributes: Attribute[] = [
  {
    name: "facegraph",
    type: "string",
  }
];
