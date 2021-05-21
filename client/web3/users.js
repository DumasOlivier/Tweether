import { eth, getInstance } from './provider';
import UserController from './artifacts/UserController.json';
import UserStorage from './artifacts/UserStorage.json';

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage);
  const profile = await storage.profiles.call(userId);

  return profile;
};

export const createUser = async (username) => {
  const controller = await getInstance(UserController);

  try {
    await ethereum.enable();
    const addresses = await eth.getAccounts();

    console.log('eth', eth);
    // FIXME: Cannot read property 'fromAscii' of undefined / MetaMask no longer injects web3. For details
    const result = await controller.createUser(
      web3.utils.asciiToHex(username),
      {
        from: addresses[0],
      }
    );

    return result;
  } catch (err) {
    console.error('Err:', err);
  }
};
