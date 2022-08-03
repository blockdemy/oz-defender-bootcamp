const { RelayClient} = require('defender-relay-client');
const relayClient = new RelayClient({

	apiKey: 'BAqaPVK5aY4BczbakJY8oQKtw43eci9s',
	apiSecret: '5nx45etQTz3diFhXD8skAVP64m8EMPuKadnwwtpZWGFh32nSdMJNbQ4LnHk4zgMU'
})

const relGetInfo = async function(){

	const getInfoLog = await relayClient.get('6766f663-5c79-4cdb-8f87-62fcb94bd3cb')
	console.log(getInfoLog)
}
relGetInfo();
