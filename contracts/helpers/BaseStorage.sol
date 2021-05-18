// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "./Owned.sol";

contract BaseStorage is Owned {
    address public controllerAddr;

    function setControllerAddr(address _controllerAddr) public onlyOwner {
        controllerAddr = _controllerAddr;
    }
}
