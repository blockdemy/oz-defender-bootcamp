const { AutotaskClient } = require('defender-autotask-client'); 
const client = new AutotaskClient({ 
		apiKey: "JCXA47m6YWoGTX3EkFMt9CXUNojLM14b",
		apiSecret: "273DVM8F3SbikrhSVVWde3xbyKV9HmPQkuJSmkJbUdEDm2oS9i9ZjUFXRSFm549F"
});

const create = async function(){
	const encodeCode =  await client.getEncodedZippedCodeFromFolder('/opt/bam-bootcamp/oz-update-UUPS/scripts/auto-task/dist')

	const myAutoTask = {
	
		name: "myAutoTask",
	        encodedZippedCode: encodeCode,
		trigger:{ 
			type: 'schedule', 
			frequencyMinutes: 1500
		},
		paused: false,
	
	}
	try{
		await client.create(myAutoTask);	
//		console.log(myAutoTask);
		
	}catch(error){console.log(error)}
//	await client.create(myAutoTask)

}
create();
