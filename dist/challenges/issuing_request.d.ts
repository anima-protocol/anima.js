import { Owner, Issuer } from "../types";
export declare function GetIssuingRequest(specs: string, fields: any, owner: Owner, issuer: Issuer, chainId: string, addressType?: string): string;
export declare function GetLivenessIssuingRequestEIP1024(specs: string, fields: any, owner: Owner, issuer: Issuer, chainId: string, addressType?: string): string;
export declare function GetLivenessIssuingRequestEIP712(specs: string, fields: any, owner: Owner, issuer: Issuer, chainId: string, addressType?: string): string;
