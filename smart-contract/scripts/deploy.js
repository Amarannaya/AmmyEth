async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const AmmyEth = await ethers.getContractFactory("AmmyEth");
  const ammyEth = await AmmyEth.deploy();

  console.log("AmmyEth address:", ammyEth.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });