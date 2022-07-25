var _a, _b, _c;
/* Anima Supported Chains */
var ETH_NAME = "ETH";
var ETH_ID = "1";
var BSC_NAME = "BSC";
var BSC_ID = "56";
var AURORA_NAME = "AURORA";
var AURORA_ID = "1313161554";
var FANTOM_NAME = "FANTOM";
var FANTOM_ID = "250";
var MOONBEAM_NAME = "MOONBEAM";
var MOONBEAM_ID = "1284";
var POLYGON_NAME = "POLYGON";
var POLYGON_ID = "137";
var EVMChainsId = (_a = {},
    _a[ETH_NAME] = ETH_ID,
    _a[BSC_NAME] = BSC_ID,
    _a[AURORA_NAME] = AURORA_ID,
    _a[FANTOM_NAME] = FANTOM_ID,
    _a[MOONBEAM_NAME] = MOONBEAM_ID,
    _a[POLYGON_NAME] = POLYGON_ID,
    _a);
var EVMChainsName = (_b = {},
    _b[ETH_ID] = ETH_NAME,
    _b[BSC_ID] = BSC_NAME,
    _b[AURORA_ID] = AURORA_NAME,
    _b[FANTOM_ID] = FANTOM_NAME,
    _b[MOONBEAM_ID] = MOONBEAM_NAME,
    _b[POLYGON_ID] = POLYGON_NAME,
    _b);
var AnimaChains = (_c = {},
    _c[ETH_NAME] = true,
    _c[BSC_NAME] = true,
    _c[AURORA_NAME] = true,
    _c[FANTOM_NAME] = true,
    _c[MOONBEAM_NAME] = true,
    _c[POLYGON_NAME] = true,
    _c);
var EVMChain = [ETH_NAME, BSC_NAME, AURORA_NAME, FANTOM_NAME, MOONBEAM_NAME, POLYGON_NAME];
function IsSupported(chain) {
    return AnimaChains[chain];
}
function GetChainNameByChainId(chainId) {
    return EVMChainsName[chainId];
}
function GetChainIdByChainName(chainId) {
    return EVMChainsId[chainId];
}
export default { EVMChain: EVMChain, IsSupported: IsSupported, GetChainNameByChainId: GetChainNameByChainId, GetChainIdByChainName: GetChainIdByChainName };
