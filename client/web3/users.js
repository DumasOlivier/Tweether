import { web3WithProvider, getInstance } from './provider';
import UserController from './artifacts/UserController.json';
import UserStorage from './artifacts/UserStorage.json';

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage);
  const { id, username } = await storage.profiles.call(userId);

  return {
    id: parseInt(id),
    username: web3WithProvider.utils.toUtf8(username),
  };
};

export const createUser = async (username) => {
  const controller = await getInstance(UserController);

  try {
    await ethereum.enable();
    const addresses = await web3WithProvider.eth.getAccounts();

    const result = await controller.createUser(
      web3WithProvider.utils.asciiToHex(username),
      {
        from: addresses[0],
      }
    );
    console.log('result', result);
    return result;
  } catch (err) {
    console.error('Err:', err);
  }
};
