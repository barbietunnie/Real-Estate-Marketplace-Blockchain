var SolnSquareVerifier = artifacts.require('./SolnSquareVerifier.sol');
var SquareVerifier = artifacts.require('SquareVerifier');
const jsonProof = require("../../zokrates/code/square/proof.json");

let accounts;
const values = Object.values(jsonProof.proof);
const tokenId = 756;

contract("TestERC721Mintable", (accts) => {
  accounts = accts;

  beforeEach(async () => {
    const squareVerifierContract = await SquareVerifier.new({ from: accounts[0] });
    this.contract = await SolnSquareVerifier.new(squareVerifierContract.address, { from: accounts[0] });
  });

  // Test if a new solution can be added for contract - SolnSquareVerifier
  it("can add a new solution", async () => {
    let revert = false;

    try {
        await this.contract.addSolution(...values, jsonProof.inputs, accounts[1], tokenId, { from: accounts[1] });
    } catch(e) {
        revert = true;
    }
    
    assert.equal(revert, false, "Could not create a new solution");
  });

  // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
  it("can mint token", async () => {
    // Submit a solution and mint it
    let revert = false;

    try {
        const owner = accounts[2];
        await this.contract.addSolution(...values, jsonProof.inputs, owner, tokenId, { from: owner });
        await this.contract.mint(owner, tokenId, { from: accounts[0] });
    } catch(e) {
        revert = true;
    }

    assert.equal(revert, false, "Could not mint token");
  });
});
