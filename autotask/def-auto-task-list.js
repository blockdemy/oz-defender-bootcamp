const { AutotaskClient } = require('defender-autotask-client'); 
const client = new AutotaskClient({ 
		apiKey: "JCXA47m6YWoGTX3EkFMt9CXUNojLM14b",
		apiSecret: "273DVM8F3SbikrhSVVWde3xbyKV9HmPQkuJSmkJbUdEDm2oS9i9ZjUFXRSFm549F"
});

const listLog = async function(){

	return await client.list();
}

listLog().then(value => console.log(value));
