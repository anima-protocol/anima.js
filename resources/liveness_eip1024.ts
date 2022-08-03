import { IssuingRequestField, Attribute } from "../types";

export interface LivenessEIP1024 {
  face_vector: string
  audit_trail: string
  face: string
}

export const LivenessEIP1024IssuingRequestFields: IssuingRequestField[] = [
  {
    name: "face_vector",
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
    name: "face_vector",
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
