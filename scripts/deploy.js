
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const MintingTokens = await hre.ethers.getContractFactory("MintingTokens");
  const mintingTokens = await MintingTokens.deploy();

  await mintingTokens.deployed();

  console.log("MintingTokens deployed to:", mintingTokens.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
