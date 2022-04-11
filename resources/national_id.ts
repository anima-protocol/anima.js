import { IssuingRequestField, Attribute } from "../types";

export interface NationalId {
  filename: string;
  lastname: string;
  birth_date: string;
  nationality: string;
  document_country: string;
  document_number: string;
  document_expiration: string;
  front_document: string;
  back_document: string;
  liveness_photo: string;
}

export const NationalIdIssuingRequestFields: IssuingRequestField[] = [
  {
    name: "front_document",
    type: "string",
  },
  {
    name: "back_document",
    type: "string",
  },
  {
    name: "liveness_photo",
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
    name: "front_document",
    type: "file",
  },
  {
    name: "back_document",
    type: "file",
  },
  {
    name: "liveness_photo",
    type: "file",
  },
];
