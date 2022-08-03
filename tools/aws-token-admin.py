import boto3 
from warrant.aws_srp import AWSSRP

client = boto3.client('cognito-idp', region_name='us-west-2')

aws = AWSSRP(username='BAqaPVK5aY4BczbakJY8oQKtw43eci9s',password='5nx45etQTz3diFhXD8skAVP64m8EMPuKadnwwtpZWGFh32nSdMJNbQ4LnHk4zgMU', pool_id='us-west-2_94f3puJWv', client_id='40e58hbc7pktmnp9i26hh5nsav', client=client)

tokens = aws.authenticate_user()

print('Bearer', tokens['AuthenticationResult']['AccessToken'])
