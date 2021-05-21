import { useEffect } from 'react';
import { eth } from '../web3/provider';

const IndexPage = () => {
  // Hooks
  useEffect(() => {
    try {
      // Prompt user to let our DApp access their addresses
      enableEthereum();
      getEthAddress().then((addresses) => {
        console.log('addresses', addresses);
        getBalance(addresses).then((value) => {
          console.log('value', value);
        });
      });
    } catch (e) {
      console.log(e, 'User denied access to their ETH addresses!');
    }
  }, []);

  // Functions
  const enableEthereum = async () => {
    try {
      await ethereum.enable();
    } catch (e) {
      console.log('e', e);
    }
  };

  const getEthAddress = async () => {
    // Get user's ETH addresses
    try {
      return await eth.getAccounts();
    } catch (e) {
      console.log('e', e);
    }
  };

  const getBalance = async (addresses) => {
    return await eth.getBalance(addresses[0]);
  };

  return <h1>Hello world from Tweether</h1>;
};

export default IndexPage;
