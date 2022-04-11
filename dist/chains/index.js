var _a;
/* Anima Supported Chains */
var ETH = "ETH";
var BSC = "BSC";
var AURORA = "AURORA";
var EVMChains = {
    "1": ETH,
    "58": BSC,
    "1313161554": AURORA,
};
var AnimaChains = (_a = {},
    _a[ETH] = true,
    _a[BSC] = true,
    _a[AURORA] = true,
    _a);
function IsSupported(chain) {
    return AnimaChains[chain];
}
function GetChainIdByChainName(chainId) {
    return EVMChains[chainId];
}
export default { ETH: ETH, IsSupported: IsSupported, GetChainIdByChainName: GetChainIdByChainName };
