pragma solidity >=0.5.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract Artwork  is ERC721 {

using Counters for Counters.Counter;
Counters.Counter private _tokenIds;

constructor() public ERC721("Artwork","ARTWORK"){

}

function mint(string memory tokenURI) public returns (uint256){
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _safeMint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);
    return newItemId;
}
}