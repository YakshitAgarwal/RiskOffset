//SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract RiskOffset {
    address public owner;

    constructor() {
        owner = msg.sender;
    }
}
