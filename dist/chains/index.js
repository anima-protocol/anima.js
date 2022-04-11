var _a;
/* Anima Supported Chains */
var ETH = "ETH";
var AnimaChains = (_a = {},
    _a[ETH] = true,
    _a);
function IsSupported(chain) {
    return AnimaChains[chain];
}
export default { ETH: ETH, IsSupported: IsSupported };
