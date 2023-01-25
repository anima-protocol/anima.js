import { IssuingRequestField, Attribute } from "../types";

export interface LivenessEIP1024 {
  facegraph: string
  audit_trail: string
  face: string
}

export const LivenessEIP1024IssuingRequestFields: IssuingRequestField[] = [
  {
    name: "facegraph",
    type: "string",
  },
  {
    name: "audit_trail",
    type: "string",
  },
  {
    name: "face",
    type: "string",
  }
];

export const LivenessEIP1024Attributes: Attribute[] = [
  {
    name: "facegraph",
    type: "string",
  },
  {
    name: "audit_trail",
    type: "string",
  },
  {
    name: "face",
    type: "string",
  }
];
