
const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("Guicoin", [1234000000000000000000n]);

  await contract.waitForDeployment();

  console.log(`Deployed to ${contract.target}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});