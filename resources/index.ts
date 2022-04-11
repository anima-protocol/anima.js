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

/* Anima Resources */
const PASSPORT = "anima:specs:document/passport@1.0.0";
const NATIONAL_ID = "anima:specs:document/national_id@1.0.0";
const DRIVER_LICENSE = "anima:specs:document/driver_license@1.0.0";
const RESIDENT_PERMIT = "anima:specs:document/resident_permit@1.0.0";

/* Anima Supported Resources */
const AnimaResources: { [key: string]: boolean } = {
  PASSPORT: true,
  NATIONAL_ID: true,
  DRIVER_LICENSE: true,
  RESIDENT_PERMIT: true,
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
};

const ResourceAttributes: { [key: string]: Attribute[] } = {
  [PASSPORT]: PassportAttributes,
  [NATIONAL_ID]: NationalIdAttributes,
  [DRIVER_LICENSE]: DriverLicenseAttributes,
  [RESIDENT_PERMIT]: ResidentPermitAttributes,
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
  IsSupported,
  IssuingRequestFields,
  ResourceAttributes,
  IssuingResourceAttributes,
  IssuingResourceAttributesTypes
};
