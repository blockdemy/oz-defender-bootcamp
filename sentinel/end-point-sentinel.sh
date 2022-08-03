SENTINEL ADMIN:

CLI: curl -X GET -H 'Accept: application/json' -H 'Content-Type: application/json' -H "X-Api-Key: $OZ_API_KEY" -H "Authorization: Bearer $TOKEN" 
--Run List---
GET ENDPOINTS:
"https://defender-api.openzeppelin.com/sentinel/notifications"
"https://defender-api.openzeppelin.com/sentinel/subscribers"
"https://defender-api.openzeppelin.com/sentinel/subscribers/{id}"

CLI: curl -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' -H "X-Api-Key: $OZ_API_KEY" -H "Authorization: Bearer $TOKEN" -d '{......}'
---Create Sentinel---
POST ENDPOINTS:
"https://defender-api.openzeppelin.com/sentinel/subscribers"

CLI: curl -X PUT -H 'Accept: application/json' -H 'Content-Type: application/json' -H "X-Api-Key: $OZ_API_KEY" -H "Authorization: Bearer $TOKEN" -d '{......}'
---Update Sentinel---
PUT ENDPOINTS:
"https://defender-api.openzeppelin.com/sentinel/subscribers/{id}"

CLI: curl -X DELETE -H 'Accept: application/json' -H 'Content-Type: application/json' -H "X-Api-Key: $OZ_API_KEY" -H "Authorization: Bearer $TOKEN" -d '{......}'
---Update Sentinel---
DELETE ENDPOINTS:
"https://defender-api.openzeppelin.com/sentinel/subscribers/{id}"

Is missing sentinel examples
