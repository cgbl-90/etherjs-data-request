const { ethers } = require("ethers");
const INFURA_ID = "5b37779062e04102a6e9efda4c5f5cb9";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const address = "0xd24400ae8bfebb18ca49be86258a3c749cf46853"; // GEMINI contract
const ABI = [
// ERROR - CLARIFYING THIS
];

const contract = new ethers.Contract(address, ABI, provider);

const requestData = async () => {
  const value = await contract.address.address();
  console.log(value);
};

requestData();
