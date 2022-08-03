AUTO-TASK ADMIN:

CLI: curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' -H "X-Api-Key: $KEY" -H "Authorization: Bearer $TOKEN" -d "$DATA"
---Run Manual---
POST ENDPOINTS: 
"https://defender-api.openzeppelin.com/autotask/autotasks/${AUTOTASKID}/runs/manual"

CLI: curl -X PUT -H 'Accept: application/json' -H 'Content-Type: application/json' -H "X-Api-Key: $KEY" -H "Authorization: Bearer $TOKEN" -d "{ \"encodedZippedCode\": \"$(cat code.zip | base64 -w0)\" }"
---Update Code---
PUT ENDPOINTS:
"https://defender-api.openzeppelin.com/autotask/autotasks/${AUTOTASKID}/code"


CLI: curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' -H "X-Api-Key: $KEY" -H "Authorization: Bearer $TOKEN"
---Run Listed---
GET ENDPOINTS:
"https://defender-api.openzeppelin.com/autotask/autotasks/${AUTOTASKID}/runs"
"https://defender-api.openzeppelin.com/autotask/autotasks/runs/${AUTOTASK_RUN_ID}"
