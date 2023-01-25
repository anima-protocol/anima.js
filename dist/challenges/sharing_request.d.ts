import { Owner, Verifier } from "../types";
export declare function GetSharingRequest(specs: string, attributes: {
    [key: string]: string;
}, owner: Owner, verifier: Verifier, chainId: string, addressType?: string): string;
