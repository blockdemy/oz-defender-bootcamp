const { AutotaskClient } = require('defender-autotask-client'); 
const client = new AutotaskClient({ 
		apiKey: "JCXA47m6YWoGTX3EkFMt9CXUNojLM14b",
		apiSecret: "273DVM8F3SbikrhSVVWde3xbyKV9HmPQkuJSmkJbUdEDm2oS9i9ZjUFXRSFm549F"
});

const idAtLog = async function(){

	return await client.get("8ab21476-58e5-46d0-9472-99f89cc640bc");
}

idAtLog().then(value => console.log(value));
