var _a;
var EVM_NAME = "EVM";
var AnimaChains = (_a = {},
    _a[EVM_NAME] = true,
    _a);
var EVMChain = [EVM_NAME];
function IsSupported(chain) {
    return AnimaChains[chain];
}
export default { EVMChain: EVMChain, IsSupported: IsSupported };
