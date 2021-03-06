/* Anima Supported Chains */
const ETH_NAME = "ETH";
const ETH_ID = "1";

const BSC_NAME = "BSC";
const BSC_ID = "56";

const AURORA_NAME = "AURORA"
const AURORA_ID = "1313161554";

const FANTOM_NAME = "FANTOM"
const FANTOM_ID = "250";

const MOONBEAM_NAME = "MOONBEAM"
const MOONBEAM_ID = "1284";

const POLYGON_NAME = "POLYGON"
const POLYGON_ID = "137";

const EVMChainsId: { [key: string]: string} = {
  [ETH_NAME]: ETH_ID,
  [BSC_NAME]: BSC_ID,
  [AURORA_NAME]: AURORA_ID,
  [FANTOM_NAME]: FANTOM_ID,
  [MOONBEAM_NAME]: MOONBEAM_ID,
  [POLYGON_NAME]: POLYGON_ID,
}

const EVMChainsName: { [key: string]: string} = {
  [ETH_ID]: ETH_NAME,
  [BSC_ID]: BSC_NAME,
  [AURORA_ID]: AURORA_NAME,
  [FANTOM_ID]: FANTOM_NAME,
  [MOONBEAM_ID]: MOONBEAM_NAME,
  [POLYGON_ID]: POLYGON_NAME,
}

const AnimaChains: { [key: string]: boolean } = {
  [ETH_NAME]: true,
  [BSC_NAME]: true,
  [AURORA_NAME]: true,
  [FANTOM_NAME]: true,
  [MOONBEAM_NAME]: true,
  [POLYGON_NAME]: true,
};

const EVMChain = [ETH_NAME, BSC_NAME, AURORA_NAME, FANTOM_NAME, MOONBEAM_NAME, POLYGON_NAME]

function IsSupported(chain: string): boolean {
  return AnimaChains[chain];
}

function GetChainNameByChainId(chainId: string): string {
  return EVMChainsName[chainId]
}

function GetChainIdByChainName(chainId: string): string {
  return EVMChainsId[chainId]
}

export default { EVMChain, IsSupported, GetChainNameByChainId, GetChainIdByChainName };
