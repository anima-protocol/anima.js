import { IssuingRequestField, Attribute } from "../types";

export interface Passport {
  filename: string;
  lastname: string;
  birth_date: string;
  nationality: string;
  document_country: string;
  document_number: string;
  document_expiration: string;
  passport_page: string;
  original_passport_page: string;
}

export const PassportIssuingRequestFields: IssuingRequestField[] = [
  {
    name: "original_passport_page",
    type: "string",
  },
];

export const PassportAttributes: Attribute[] = [
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
    name: "passport_page",
    type: "file",
  },
  {
    name: "original_passport_page",
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
