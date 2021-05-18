// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "../helpers/BaseStorage.sol";

contract UserStorage is BaseStorage {
    struct Profile {
        uint256 id;
        bytes32 username;
    }

    uint256 latestUserId = 0;
    mapping(uint256 => Profile) public profiles;

    function createUser(bytes32 _username) public returns (uint256) {
        require(msg.sender == controllerAddr);

        latestUserId++;
        profiles[latestUserId] = Profile(latestUserId, _username);

        return latestUserId;
    }
}
