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
    const addresses = await eth.getAccounts(); // Get Metamask addresses

    // FIXME: add a check on the username (32 bytes).

    // Create a user and pay the gas with the first address of Metamask addresses.
    const result = await controller.createUser(eth.utils.fromAscii(username), {
      from: addresses[0],
    });

    return result;
  } catch (err) {
    console.error('Err:', err);
  }
};
