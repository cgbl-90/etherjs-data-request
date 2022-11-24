const { ethers } = require("ethers");
const INFURA_ID = "5b37779062e04102a6e9efda4c5f5cb9";

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);
const address = "0x3bfc20f0b9afcace800d73d2191166ff16540258";

const requestBalance = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    `The balance of ${address} is ${ethers.utils.formatEther(balance)} ETH`
  );
};

requestBalance();
