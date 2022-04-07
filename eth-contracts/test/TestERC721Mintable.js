var REMToken = artifacts.require('REMToken');

contract('TestERC721Mintable', accounts => {
    const tokenIds = [78293, 1290, 672, 15, 235];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await REMToken.new({from: account_one});

            // TODO: mint multiple tokens
            for(let i = 0; i < tokenIds.length; i++) { // mint 5 tokens
                await this.contract.mint(accounts[i], tokenIds[i], { from: accounts[i] });
            }
        });

        it('should return total supply', async function () { 
            const totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, tokenIds.length, "The total supply is incorrect");
        });

        it('should get token balance', async function () {
            for(let i = 0; i < tokenIds.length; i++) { // mint 5 tokens
                const balance = await this.contract.balanceOf(accounts[i], { from: accounts[i] });

                // since one token was added to each account previously
                assert.equal(balance, 1, "The account balance is incorrect");
            }
        });

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const tokenId = tokenIds[3];
            const baseURI = await this.contract.baseTokenURI();
            const expectedTokenURI = baseURI + tokenId;


            const tokenURI = await this.contract.tokenURI(tokenId);
            assert.equal(tokenURI, expectedTokenURI, "Incorrect tokenURI");
        })

        it('should transfer token from one owner to another', async function () { 
            const token = tokens[2];
            const sender = accounts[2];
            const receiver = accounts[4];

            await this.contract.transferFrom(sender, receiver, token);
            const newOwner = await this.contract.ownerOf(token);

            assert.equal(newOwner, receiver, "Token transfer was not successful");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await REMToken.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let revert = false;
            try {
                await this.contract.mint(accounts[3], tokenIds[3], { from: accounts[3] });
            } catch(e) {
                revert = true;
            }

            assert.equal(revert, true, "Can only mint as the contract owner");
        })

        it('should return contract owner', async function () { 
            const owner = await this.contract.owner();
            assert.equal(owner, accounts[0], "Unable to get the contract owner");
        })

    });
})