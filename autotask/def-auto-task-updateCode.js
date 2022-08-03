const { AutotaskClient } = require('defender-autotask-client'); 
const client = new AutotaskClient({ 
		apiKey: "JCXA47m6YWoGTX3EkFMt9CXUNojLM14b",
		apiSecret: "273DVM8F3SbikrhSVVWde3xbyKV9HmPQkuJSmkJbUdEDm2oS9i9ZjUFXRSFm549F"
});

const updateCode = async function(){
	
	const encodeCode = await client.updateCodeFromFolder("8c2de319-2380-4340-a03a-507018068b91", '/opt/bam-bootcamp/oz-update-UUPS/scripts/auto-task/dist');

	console.log(encodeCode);

}
updateCode();
