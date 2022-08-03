const { Relayer } = require('defender-relay-client');

// Main business logic
exports.main = async function(relayer) {
  // Send funds to a target address
  const txRes = await relayer.sendTransaction({
    to: '0x0Ecc15fdC3b4301d4DBE0b00095afA98081FE78d',
    value: '2',
    speed: 'fast',
    gasLimit: '21000',
  });

  console.log(`Sent transaction ${txRes.hash}`);
  return txRes.hash;
}

// Entrypoint for the Autotask
exports.handler = async function(credentials) {
  const keys =  { apiKey: credentials.secrets.myApiKey, apiSecret: credentials.secrets.mySecretKey};
  const relayer = new Relayer(keys);
  //const relayer = new Relayer(credentials);
  return exports.main(relayer);  
}

// To run locally (this code will not be executed in Autotasks)
if (require.main === module) {
  require('dotenv').config();
  const { API_KEY: myApiKeyNo, API_SECRET: mySecretKeyNo } = process.env;
  exports.handler({ myApiKeyNo, mySecretKeyNo })
    .then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}
