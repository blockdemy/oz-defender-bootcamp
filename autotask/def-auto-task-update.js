const { AutotaskClient } = require('defender-autotask-client'); 
const client = new AutotaskClient({ 
		apiKey: "JCXA47m6YWoGTX3EkFMt9CXUNojLM14b",
		apiSecret: "273DVM8F3SbikrhSVVWde3xbyKV9HmPQkuJSmkJbUdEDm2oS9i9ZjUFXRSFm549F"
});

const update = async function(){
	const encodeCode =  await client.getEncodedZippedCodeFromFolder('/opt/bam-bootcamp/oz-update-UUPS/scripts/auto-task/dist')

	const myAutoTask = {
		
		autotaskId: "5777dcde-5f59-4603-ad17-284c2afa66b1",
		name: "myAutoTask-Update",
	        encodedZippedCode: encodeCode,
		trigger:{ 
			type: 'schedule', 
			frequencyMinutes: 500
		},
		paused: false,
	
	}
	try{
		await client.update(myAutoTask);	
//		console.log(myAutoTask);
		
	}catch(error){console.log(error)}
//	await client.create(myAutoTask)

}
update();
