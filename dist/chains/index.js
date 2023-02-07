const EVM_NAME = "EVM";
const ELROND_NAME = "ELROND";
const AnimaChains = {
    [EVM_NAME]: true,
    [ELROND_NAME]: true,
};
const EVMChain = [EVM_NAME, ELROND_NAME];
function IsSupported(chain) {
    return AnimaChains[chain];
}
export default { EVMChain, IsSupported };
