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
  liveness_photo: string;
}

export const PassportIssuingRequestFields: IssuingRequestField[] = [
  {
    name: "passport_page",
    type: "string",
  },
  {
    name: "liveness_photo",
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
    name: "liveness_photo",
    type: "file",
  },
];
