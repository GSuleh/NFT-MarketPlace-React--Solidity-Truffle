pragma solidity >=0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Artwork  is ERC721 {

string[] public artworks;

constructor() ERC721("Artwork","ARTWORK"){

}

function mint(string memory _artwork) public{
    //Require Unique image
    //Add Artwork
    //Call mint function
    //Track Artwork
}
}