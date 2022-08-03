const { AutotaskClient } = require('defender-autotask-client'); 
const client = new AutotaskClient({ 
		apiKey: "JCXA47m6YWoGTX3EkFMt9CXUNojLM14b",
		apiSecret: "273DVM8F3SbikrhSVVWde3xbyKV9HmPQkuJSmkJbUdEDm2oS9i9ZjUFXRSFm549F"
});

const aTdelete = async function(){

	await client.delete('5777dcde-5f59-4603-ad17-284c2afa66b1');	
}
aTdelete().then(value => console.log(value));
