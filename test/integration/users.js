const UserStorage = artifacts.require('UserStorage');

contract('users', () => {
  it('can create user', async () => {
    const storage = await UserStorage.deployed();

    const username = web3.utils.fromAscii('Olivier');
    const tx = await storage.createUser(username);

    console.log(tx);
  });
});
