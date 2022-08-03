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
  original_document_front: string;
  original_document_back: string;
}

export const NationalIdIssuingRequestFields: IssuingRequestField[] = [
  {
    name: "original_document_front",
    type: "string",
  },
  {
    name: "original_document_back",
    type: "string",
  },
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
    name: "original_document_front",
    type: "file",
  },
  {
    name: "document_back",
    type: "file",
  },
  {
    name: "original_document_back",
    type: "file",
  },
  {
    name: "face",
    type: "file",
  },
  {
    name: "face_vector",
    type: "file",
  },
  {
    name: "audit_trail",
    type: "file",
  },
];
