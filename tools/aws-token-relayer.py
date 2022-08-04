import boto3 
from warrant.aws_srp import AWSSRP  

client = boto3.client('cognito-idp', region_name='us-west-2') 
#aws = AWSSRP(username='API_KEY', password='API_SECRET', pool_id='POOL_ID', client_id='CLIENT_ID', client=client) 
#aws = AWSSRP(username='xxxxx', password='xxx', pool_id='us-east-1_UXjf1ZhVi', client_id='2thrbvaer1j0gsh6nfkfc18r4b', client=client) 
aws = AWSSRP(username='3sB9hyBa8Njb8549JXsPKFBUKUD1YAPY', password='2VVPeusPCyQ8VoJmsQUSbeXfhK7GCTnBnm74TtePcNVc7HByRiEJfskALo56Ak7B', pool_id='us-west-2_iLmIggsiy', client_id='1bpd19lcr33qvg5cr3oi79rdap', client=client) 
tokens = aws.authenticate_user() 
print('Access Token', tokens['AuthenticationResult']['AccessToken'])
