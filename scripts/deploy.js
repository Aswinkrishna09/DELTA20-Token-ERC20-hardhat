const hre = require("hardhat");

async function main() {
  const DELTA20 = await hre.ethers.getContractFactory("DELTA20");
  const delta20 = await DELTA20.deploy(100000000, 50);
  await delta20.deployed();
  console.log("DELTA20 token deployed: ", delta20.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
