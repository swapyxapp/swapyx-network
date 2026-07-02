// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Router {

    event SwapExecuted(
        address indexed user,
        uint256 amount
    );

    function swap(uint256 amount) external {
        emit SwapExecuted(msg.sender, amount);
    }
}
