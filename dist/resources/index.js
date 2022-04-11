var _a, _b;
import { PassportIssuingRequestFields, PassportAttributes } from "./passport";
import { NationalIdAttributes, NationalIdIssuingRequestFields, } from "./national_id";
import { DriverLicenseAttributes, DriverLicenseIssuingRequestFields, } from "./driver_license";
import { ResidentPermitAttributes, ResidentPermitIssuingRequestFields, } from "./resident_permit";
/* Anima Resources */
var PASSPORT = "anima:specs:document/passport@1.0.0";
var NATIONAL_ID = "anima:specs:document/national_id@1.0.0";
var DRIVER_LICENSE = "anima:specs:document/driver_license@1.0.0";
var RESIDENT_PERMIT = "anima:specs:document/resident_permit@1.0.0";
/* Anima Supported Resources */
var AnimaResources = {
    PASSPORT: true,
    NATIONAL_ID: true,
    DRIVER_LICENSE: true,
    RESIDENT_PERMIT: true,
};
function IsSupported(resource) {
    return AnimaResources[resource];
}
/* Ethereum chain */
var IssuingRequestFields = (_a = {},
    _a[PASSPORT] = PassportIssuingRequestFields,
    _a[NATIONAL_ID] = NationalIdIssuingRequestFields,
    _a[DRIVER_LICENSE] = DriverLicenseIssuingRequestFields,
    _a[RESIDENT_PERMIT] = ResidentPermitIssuingRequestFields,
    _a);
var ResourceAttributes = (_b = {},
    _b[PASSPORT] = PassportAttributes,
    _b[NATIONAL_ID] = NationalIdAttributes,
    _b[DRIVER_LICENSE] = DriverLicenseAttributes,
    _b[RESIDENT_PERMIT] = ResidentPermitAttributes,
    _b);
var IssuingResourceAttributes = function (key) {
    var result = {};
    ResourceAttributes[key].forEach(function (attribute) {
        result[attribute.name] = true;
    });
    return result;
};
var IssuingResourceAttributesTypes = function (key) {
    return ResourceAttributes[key].map(function (attribute) {
        return {
            name: attribute.name,
            type: "bool"
        };
    });
};
export default {
    PASSPORT: PASSPORT,
    NATIONAL_ID: NATIONAL_ID,
    DRIVER_LICENSE: DRIVER_LICENSE,
    RESIDENT_PERMIT: RESIDENT_PERMIT,
    IsSupported: IsSupported,
    IssuingRequestFields: IssuingRequestFields,
    ResourceAttributes: ResourceAttributes,
    IssuingResourceAttributes: IssuingResourceAttributes,
    IssuingResourceAttributesTypes: IssuingResourceAttributesTypes
};
