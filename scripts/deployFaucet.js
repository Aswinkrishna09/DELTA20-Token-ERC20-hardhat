const hre = require("hardhat");
require('dotenv').config()

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy(process.env.TOKEN_ADDRESS);
  await faucet.deployed();
  console.log("Faucet deployed: ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
