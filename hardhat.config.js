/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers"); 
require('@openzeppelin/hardhat-upgrades'); 
require('@nomiclabs/hardhat-etherscan');

require("dotenv").config();
module.exports = {
  solidity: "0.8.9",
  networks: {
  	rinkeby: {
		url: `https://eth-rinkeby.alchemyapi.io/v2/<key>`,
		accounts: [process.env.ALCHEMY_PRIVATE_KEY]
	},
  },
   etherscan:{
	apiKey: process.env.ETHERSCAN_KEY
	
   },
};
