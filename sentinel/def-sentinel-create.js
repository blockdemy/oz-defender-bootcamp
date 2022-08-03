const { SentinelClient } = require('defender-sentinel-client'); 
const creds = { apiKey: "JCXA47m6YWoGTX3EkFMt9CXUNojLM14b", apiSecret: "273DVM8F3SbikrhSVVWde3xbyKV9HmPQkuJSmkJbUdEDm2oS9i9ZjUFXRSFm549F" }; 
const client = new SentinelClient(creds);

const output = async function(){
const notification = await client.createNotificationChannel({   
	type: 'email',   
	name: 'MyEmailNotification',   
	config: {     
		emails: ['john@example.com'],   
	},   
	paused: false, 
  })
}


output();

//const { notificationId, type } = notificationChannels[0];
