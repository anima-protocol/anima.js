import { Attribute, IssuingRequestField } from "../types";
declare function IsSupported(resource: string): boolean;
declare const _default: {
    PASSPORT: string;
    NATIONAL_ID: string;
    DRIVER_LICENSE: string;
    RESIDENT_PERMIT: string;
    LIVENESS_EIP712: string;
    LIVENESS_EIP1024: string;
    IsSupported: typeof IsSupported;
    IssuingRequestFields: {
        [key: string]: IssuingRequestField[];
    };
    ResourceAttributes: {
        [key: string]: Attribute[];
    };
    IssuingResourceAttributes: (key: string) => any;
    IssuingResourceAttributesTypes: (key: string) => {
        name: string;
        type: string;
    }[];
};
export default _default;
