var _a;
var EVM_NAME = "EVM";
var ELROND_NAME = "ELROND";
var AnimaChains = (_a = {},
    _a[EVM_NAME] = true,
    _a[ELROND_NAME] = true,
    _a);
var EVMChain = [EVM_NAME, ELROND_NAME];
function IsSupported(chain) {
    return AnimaChains[chain];
}
export default { EVMChain: EVMChain, IsSupported: IsSupported };
