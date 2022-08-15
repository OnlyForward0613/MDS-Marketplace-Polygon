//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract TestNFT is ERC1155 {

    constructor() ERC1155("https://gateway.pinata.cloud/ipfs/QmSAgQ5F8JiT88w5uHRJx9LFQwUY7QoMFrQ5FZuhmu76mi/") {
        _mint(msg.sender, 1, 5, "");
        _mint(msg.sender, 2, 5, "");
        _mint(msg.sender, 3, 5, "");
        _mint(msg.sender, 4, 5, "");
        _mint(msg.sender, 5, 5, "");
        _mint(msg.sender, 6, 5, "");
        _mint(msg.sender, 7, 5, "");
    }

    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://gateway.pinata.cloud/ipfs/QmSAgQ5F8JiT88w5uHRJx9LFQwUY7QoMFrQ5FZuhmu76mi/",
                Strings.toString(_tokenid),".json"
            )
        );
    }
}
