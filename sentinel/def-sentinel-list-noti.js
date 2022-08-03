const { SentinelClient } = require('defender-sentinel-client'); 
const creds = { apiKey: "JCXA47m6YWoGTX3EkFMt9CXUNojLM14b", apiSecret: "273DVM8F3SbikrhSVVWde3xbyKV9HmPQkuJSmkJbUdEDm2oS9i9ZjUFXRSFm549F" }; 
const client = new SentinelClient(creds);

const output = async function(){
	const notificationChannels = await client.listNotificationChannels() 
	console.log(notificationChannels);
}

output();

//const { notificationId, type } = notificationChannels[0];
