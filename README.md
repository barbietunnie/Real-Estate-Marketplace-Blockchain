# Real Estate Marketplace Blockchain - Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Tools

- Truffle v5
- Solidity v0.5.2 (solc-js)
- Node v10.24.1
- Openzeppelin Solidity 2.2.0

## How-to

1. Clone the repository

    ```
    git clone git@github.com:barbietunnie/Real-Estate-Marketplace-Blockchain.git
    ```

2. Create `.secret` and `.infura` file in the `eth-contracts` folder to store your _mnemonic_ there and Infura project id keys respectively.

3. Install the dependencies

    ```
    npm install
    ```

4. Compile the contracts

    ```
    truffle compile
    ```

5. Run the migration (_Optional_)

    ```
    truffle migrate --reset
    ```

6. Run tests

    ```
    truffle test
    ```

## Deliverables

### SolnSquareVerifier Ropsten [contract address](https://ropsten.etherscan.io/address/0xb9D59881B429359Afb565F497Ea30D2f814BF41C#code)

0xb9D59881B429359Afb565F497Ea30D2f814BF41C

### Contract ABIs

The contract ABIs can be found in the `eth-contracts/build/contracts` directory

> The contract was deployed on _Ropsten_ network as I have been unable to deploy on _Rinkeby_ network after several attempts and several hours spent. Tried several suggestions in the Udacity Knowledge base as well as from various sources online, with variety of `gas` and `gasPrice` specified, but nothing seems to work.

### OpenSea Marketplace

> The tokens could not be listed on OpenSea due to the inability to deploy the tokens on Rinkeby network

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
