hardhat install:
https://hardhat.org/tutorial/setting-up-the-environment

Nodos blockchain:
* https://www.alchemy.com/
* https://infura.io/

EtherScan Key
https://etherscan.io/login

instalación modulos:

* cd oz-defender-bootcamp 
* npm install

Ejecución de scripts defender

Ejemplo:
* npx hardhat run admin/<script> --network rinkeby|local

Ejecución peticiones https a través CURL CLI refierase a los files end-points-<modulo difender>.sh

forta bot:

https://forta.org/
https://docs.forta.network/en/latest/hardhat/
https://explorer.forta.network/
https://github.com/forta-network/forta-bot-examples

Nota: Se puede buscar algún smartcontract en MAINNET, y así probarlo con los bot de forta.

localstack:

https://docs.localstack.cloud/aws/sqs/
https://github.com/localstack/localstack#overview

awslocal cli:
https://github.com/localstack/awscli-local

token AWS-OZ:

Admin .-
* username: API_KEY
* password: API_SECRET
* pool_id: us-west-2_94f3puJWv
* client_id: 40e58hbc7pktmnp9i26hh5nsav

Relayer .- 
* username: API_KEY
* password: API_SECRET
* pool_id: us-west-2_iLmIggsiy
* client_id: 1bpd19lcr33qvg5cr3oi79rdap

pkg python:

pip3 install boto3  
pip3 install warrant  
pip3 install sagemaker

Python3.8 > versión ...

Obtener Token = curl Authentication: Bearer $TOKEN:

Python3.8 <tools/aws-token-admin.py|aws-token-relayer.py>

ngrok install:

https://ngrok.com/download
ngrok http <port URL local>

Nota: Test Webhook a través de la creación dummy de algún POST o de forma ágil una QUEUE SQS, lo anterior para probar SENTINEL con URL externa, usando ngrok.
