const { KeyValueStoreClient } = require('defender-kvstore-client');  

exports.handler =  async function(event) {   
	const store = new KeyValueStoreClient(event);    
	await store.put('mySecretKey', 'myApiKey');
	const value = await store.get('myApiKey');
	console.log(value)
	//await store.del('myCLIKey');
}
