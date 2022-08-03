const { RelayClient} = require('defender-relay-client');
const relayClient = new RelayClient({

	apiKey: 'BAqaPVK5aY4BczbakJY8oQKtw43eci9s',
	apiSecret: '5nx45etQTz3diFhXD8skAVP64m8EMPuKadnwwtpZWGFh32nSdMJNbQ4LnHk4zgMU'
})


const requestParams = {
	
	name: "OZ-BAM-BOOTCAMP",
	network: "rinkeby",
	minBalance: BigInt(1e17).toString()
}

const relCreate = async function(){

	try {
		const createLog = await relayClient.create(requestParams);
		console.log(createLog);

	}catch(error){console.log(error)}

}
relCreate();
