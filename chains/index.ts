/* Anima Supported Chains */
const ETH = "ETH";

const AnimaChains: { [key: string]: boolean } = {
  [ETH]: true,
};

function IsSupported(chain: string): boolean {
  return AnimaChains[chain];
}

export default { ETH, IsSupported };
