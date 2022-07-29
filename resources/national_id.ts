import { IssuingRequestField, Attribute } from "../types";

export interface NationalId {
  filename: string;
  lastname: string;
  birth_date: string;
  nationality: string;
  document_country: string;
  document_number: string;
  document_expiration: string;
  document_front: string;
  document_back: string;
  liveness_photo: string;
}

export const NationalIdIssuingRequestFields: IssuingRequestField[] = [
  {
    name: "document_front",
    type: "string",
  },
  {
    name: "document_back",
    type: "string",
  }
];

export const NationalIdAttributes: Attribute[] = [
  {
    name: "firstname",
    type: "string",
  },
  {
    name: "lastname",
    type: "string",
  },
  {
    name: "birth_date",
    type: "string",
  },
  {
    name: "nationality",
    type: "string",
  },
  {
    name: "document_country",
    type: "string",
  },
  {
    name: "document_number",
    type: "string",
  },
  {
    name: "document_expiration",
    type: "string",
  },
  {
    name: "document_front",
    type: "file",
  },
  {
    name: "document_back",
    type: "file",
  }
];
