import boto3 
from warrant.aws_srp import AWSSRP  

client = boto3.client('cognito-idp', region_name='us-west-2') 
#aws = AWSSRP(username='API_KEY', password='API_SECRET', pool_id='POOL_ID', client_id='CLIENT_ID', client=client) 
#aws = AWSSRP(username='xxx', password='xxx', pool_id='us-east-1_UXjf1ZhVi', client_id='2thrbvaer1j0gsh6nfkfc18r4b', client=client) 
aws = AWSSRP(username='JCXA47m6YWoGTX3EkFMt9CXUNojLM14b', password='273DVM8F3SbikrhSVVWde3xbyKV9HmPQkuJSmkJbUdEDm2oS9i9ZjUFXRSFm549F', pool_id='us-west-2_94f3puJWv', client_id='40e58hbc7pktmnp9i26hh5nsav', client=client) 
tokens = aws.authenticate_user() 
print('Access Token', tokens['AuthenticationResult']['AccessToken'])
