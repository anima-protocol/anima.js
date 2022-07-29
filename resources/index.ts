import { PassportIssuingRequestFields, PassportAttributes } from "./passport";
import { Attribute, IssuingRequestField } from "../types";
import {
  NationalIdAttributes,
  NationalIdIssuingRequestFields,
} from "./national_id";
import {
  DriverLicenseAttributes,
  DriverLicenseIssuingRequestFields,
} from "./driver_license";
import {
  ResidentPermitAttributes,
  ResidentPermitIssuingRequestFields,
} from "./resident_permit";
import {LivenessEIP712Attributes, LivenessEIP712IssuingRequestFields} from "./liveness_eip712";
import {LivenessEIP1024Attributes, LivenessEIP1024IssuingRequestFields} from "./liveness_eip1024";

/* Anima Resources */
const PASSPORT = "anima:specs:document/passport@1.0.0";
const NATIONAL_ID = "anima:specs:document/national_id@1.0.0";
const DRIVER_LICENSE = "anima:specs:document/driver_license@1.0.0";
const RESIDENT_PERMIT = "anima:specs:document/resident_permit@1.0.0";
const LIVENESS_EIP1024 = "anima:specs:document/liveness@1.0.0";
const LIVENESS_EIP712 = "anima:specs:face@1.0.0";

/* Anima Supported Resources */
const AnimaResources: { [key: string]: boolean } = {
  PASSPORT: true,
  NATIONAL_ID: true,
  DRIVER_LICENSE: true,
  RESIDENT_PERMIT: true,
  LIVENESS_EIP1024: true,
  LIVENESS_EIP712: true,
};

function IsSupported(resource: string): boolean {
  return AnimaResources[resource];
}

/* Ethereum chain */
const IssuingRequestFields: { [key: string]: IssuingRequestField[] } = {
  [PASSPORT]: PassportIssuingRequestFields,
  [NATIONAL_ID]: NationalIdIssuingRequestFields,
  [DRIVER_LICENSE]: DriverLicenseIssuingRequestFields,
  [RESIDENT_PERMIT]: ResidentPermitIssuingRequestFields,
  [LIVENESS_EIP712]: LivenessEIP712IssuingRequestFields,
  [LIVENESS_EIP1024]: LivenessEIP1024IssuingRequestFields,
};

const ResourceAttributes: { [key: string]: Attribute[] } = {
  [PASSPORT]: PassportAttributes,
  [NATIONAL_ID]: NationalIdAttributes,
  [DRIVER_LICENSE]: DriverLicenseAttributes,
  [RESIDENT_PERMIT]: ResidentPermitAttributes,
  [LIVENESS_EIP712]: LivenessEIP712Attributes,
  [LIVENESS_EIP1024]: LivenessEIP1024Attributes,
};

const IssuingResourceAttributes = (key: string) => {
  const result: any = {};
  ResourceAttributes[key].forEach((attribute) => {
    result[attribute.name] = true;
  })
  return result;
}

const IssuingResourceAttributesTypes = (key: string) => {
  return ResourceAttributes[key].map((attribute) => {
    return {
      name: attribute.name,
      type: "bool"
    }
  })
}

export default {
  PASSPORT,
  NATIONAL_ID,
  DRIVER_LICENSE,
  RESIDENT_PERMIT,
  LIVENESS_EIP712,
  LIVENESS_EIP1024,
  IsSupported,
  IssuingRequestFields,
  ResourceAttributes,
  IssuingResourceAttributes,
  IssuingResourceAttributesTypes
};
