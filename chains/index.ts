const EVM_NAME = "EVM";

const AnimaChains: { [key: string]: boolean } = {
  [EVM_NAME]: true,
};

const EVMChain = [EVM_NAME]

function IsSupported(chain: string): boolean {
  return AnimaChains[chain];
}

export default { EVMChain, IsSupported };
