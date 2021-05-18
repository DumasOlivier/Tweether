// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Owned {
    address public ownerAddr;

    /*
        Note : This function runs only once, when the contract is deployed, and then never again.
        By getting the msg.sender inside the constructor, we are getting the address that's
        deploying the contract for the very first time. This is a very common way of setting the
        initial ownerAddr securely.
    */
    constructor() public {
        ownerAddr = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddr);
        _;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        require(_newOwner != address(0));

        ownerAddr = _newOwner;
    }
}
