import { IssuingRequestField, Attribute } from "../types";

export interface LivenessEIP712 {
  face_vector: string
}

export const LivenessEIP712IssuingRequestFields: IssuingRequestField[] = [
  {
    name: "face_vector",
    type: "string",
  }
];

export const LivenessEIP712Attributes: Attribute[] = [
  {
    name: "face_vector",
    type: "string",
  }
];
