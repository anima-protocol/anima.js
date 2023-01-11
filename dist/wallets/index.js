/* Anima Supported Wallets */
const METAMASK = "METAMASK";
const AnimaWallets = {
    [METAMASK]: true,
};
function IsSupported(wallet) {
    return AnimaWallets[wallet];
}
export default { METAMASK, IsSupported };
