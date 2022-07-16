require("@nomiclabs/hardhat-etherscan");
require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: '0.8.1',
  settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    },
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "77DW3Q9S6BMK4N5KDY5UDHK3MBWTIHCURT",
  }
};