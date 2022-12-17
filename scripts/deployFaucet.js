const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy("0x7D288d1ED90C3cb4df66dB75FE2Cb167Acc0d3Ef");
  await faucet.deployed();
  console.log("Faucet deployed: ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
