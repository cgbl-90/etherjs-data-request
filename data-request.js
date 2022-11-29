const { ethers } = require("ethers");
const INFURA_ID = "5b37779062e04102a6e9efda4c5f5cb9";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

/*

The ABI, Application Binary Interface, is basically how you call functions in a contract and get data back.

An ABI determines such details as how functions are called and in which binary format information should be passed from one program component to the next...

An Ethereum smart contract is bytecode deployed on the Ethereum blockchain. There could be several functions in a contract. An ABI is necessary so that you can specify which function in the contract to invoke, as well as get a guarantee that the function will return data in the format you are expecting.

From Ethereum's ABI specification, an example:

contract Foo {
  function bar(real[2] xy) {}
  function baz(uint32 x, bool y) returns (bool r) { r = x > 32 || y; }
  function sam(bytes name, bool z, uint[] data) {}
}

*/
const address = " "; // ETHEREUM contract
const ABI = [

];

const contract = new ethers.Contract(address, ABI, provider);

const requestData = async () => {
  const value = await contract.address.address();
  console.log(value);
};

requestData();
