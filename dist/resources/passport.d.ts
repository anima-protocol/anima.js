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
export declare const PassportIssuingRequestFields: IssuingRequestField[];
export declare const PassportAttributes: Attribute[];
