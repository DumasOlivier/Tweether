import Web3 from 'web3';
import contract from 'truffle-contract';

const provider = () => {
  // If the user has MetaMask:
  if (typeof web3 !== 'undefined') {
    return web3.currentProvider;
  } else {
    console.error('You need to install MetaMask for this app to work!');
  }
};

export const web3WithProvider = new Web3(provider());

export const getInstance = (artifact) => {
  const contractObj = contract(artifact);
  contractObj.setProvider(provider());

  return contractObj.deployed();
};
