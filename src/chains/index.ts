const EVM_NAME = "EVM";
const ELROND_NAME = "ELROND";

const AnimaChains: { [key: string]: boolean } = {
  [EVM_NAME]: true,
  [ELROND_NAME]: true,
};

export const EVMChain = [EVM_NAME, ELROND_NAME];

export function IsSupported(chain: string): boolean {
  return AnimaChains[chain];
}

export default {
  IsSupported,
  EVMChain,
};
