import { IssuingRequestField, Attribute } from "../types";

export interface LivenessEIP712 {
  zk_facemap: string
}

export const LivenessEIP712IssuingRequestFields: IssuingRequestField[] = [
  {
    name: "zk_facemap",
    type: "string",
  }
];

export const LivenessEIP712Attributes: Attribute[] = [
  {
    name: "zk_facemap",
    type: "string",
  }
];
