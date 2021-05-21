// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "./Owned.sol";

contract BaseController is Owned {
    // Contract Manager's address
    address managerAddr;

    function setManagerAddr(address _managerAddr) public onlyOwner {
        managerAddr = _managerAddr;
    }
}
