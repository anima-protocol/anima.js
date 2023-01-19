import { IssuingRequestField, Attribute } from "../types";
export interface DriverLicense {
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
export declare const DriverLicenseIssuingRequestFields: IssuingRequestField[];
export declare const DriverLicenseAttributes: Attribute[];
