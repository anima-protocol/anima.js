/* Anima Supported Chains */
const ETH = "ETH";
const BSC = "BSC";
const AURORA = "AURORA"

const EVMChains: { [key: string]: string} = {
  "1": ETH,
  "58": BSC,
  "1313161554": AURORA,
}

const AnimaChains: { [key: string]: boolean } = {
  [ETH]: true,
  [BSC]: true,
  [AURORA]: true,
};

function IsSupported(chain: string): boolean {
  return AnimaChains[chain];
}

function GetChainNameByChainId(chainId: string): string {
  return EVMChains[chainId]
}

export default { ETH, IsSupported, GetChainNameByChainId };
