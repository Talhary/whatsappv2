const claim = async()=>{
    fetch("https://api.hexn.cc/v1/kyc/marketing/farming/claim/", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
    "access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJIZXhuIiwic3ViIjoiQWNjZXNzIHRva2VuIiwiYXVkIjoiaGV4bl9zZXJ2aWNlc19wcm9kIiwiaWF0IjoxNzIxMzgxMzAyLCJleHAiOjE3MjE0MDI5MDIsInVpZCI6IkJRNVVlOEs5bGlYMW1WRHlwcWV4TGFoYWZlWmUiLCJjbGFpbXMiOnsicGxhdGZvcm0iOiJURUxFR1JBTSIsIm1mYSI6ZmFsc2UsInJ0aWQiOiIwNjRhOGQ4OC0yZGM3LTQ4ZjktOGZmYy03OGIwZDU1MzRlOGUifSwidWlkX2FmZmlsaWF0ZSI6IkJRNVVlOEs5bGlYMW1WRHlwcWV4TGFoYWZlWmUifQ.gz-FrJV5mW2Mi7dd3Tv_sOjKQqIgTu4czyS-7Xlb9RV6QscmZIcVMivwhRYNKfz1U4v4MpcanTue5d0UBqzsbr6o0YfhSWOsdirZyvdT9klg54Fc7tbUtwWWPUf6B2br3hLjkI2hmBE-dMWObxoeR__sHuyBzUFs-vCmCJlbXwfZV4shaIRMyVMlI2xBrsmQ_HEXROG1CljtTOrVMBbx3Cj2gerUXcZ4EHQ_N5obmyTAD4m90vy-_oyChQTwQIDQ47pCmgHgbiNASMbQ9hELH52BIv2BIQYD03izo9JxOIxhh8stx8k3_eZBV48ReYRVSnhUQuWe7CFciMKvLFfemA",
    "content-type": "application/json",
    "customer_uid": "BQ5Ue8K9liX1mVDypqexLahafeZe",
    "fingerprint": "2e346efb3083b14470965fb9d9ccb95b",
    "platform": "WEB",
    "platform-version": "0.0.34",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "trace-uuid": "a0c63c50-ce3e-46b7-9196-02764df59f0a"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"platform\":\"WEB\",\"farming_uuid\":\"6934a043-62e2-486f-ae73-e8ee6ed5651b\"}",
  "method": "POST"
}).then(res=>res.json()).then(res=>console.log(res))
}

const axios = require('axios');



const startFarming = ()=>{
    fetch("https://api.hexn.cc/v1/kyc/marketing/farming/start/", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
    "access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJIZXhuIiwic3ViIjoiQWNjZXNzIHRva2VuIiwiYXVkIjoiaGV4bl9zZXJ2aWNlc19wcm9kIiwiaWF0IjoxNzIxMzgxMzAyLCJleHAiOjE3MjE0MDI5MDIsInVpZCI6IkJRNVVlOEs5bGlYMW1WRHlwcWV4TGFoYWZlWmUiLCJjbGFpbXMiOnsicGxhdGZvcm0iOiJURUxFR1JBTSIsIm1mYSI6ZmFsc2UsInJ0aWQiOiIwNjRhOGQ4OC0yZGM3LTQ4ZjktOGZmYy03OGIwZDU1MzRlOGUifSwidWlkX2FmZmlsaWF0ZSI6IkJRNVVlOEs5bGlYMW1WRHlwcWV4TGFoYWZlWmUifQ.gz-FrJV5mW2Mi7dd3Tv_sOjKQqIgTu4czyS-7Xlb9RV6QscmZIcVMivwhRYNKfz1U4v4MpcanTue5d0UBqzsbr6o0YfhSWOsdirZyvdT9klg54Fc7tbUtwWWPUf6B2br3hLjkI2hmBE-dMWObxoeR__sHuyBzUFs-vCmCJlbXwfZV4shaIRMyVMlI2xBrsmQ_HEXROG1CljtTOrVMBbx3Cj2gerUXcZ4EHQ_N5obmyTAD4m90vy-_oyChQTwQIDQ47pCmgHgbiNASMbQ9hELH52BIv2BIQYD03izo9JxOIxhh8stx8k3_eZBV48ReYRVSnhUQuWe7CFciMKvLFfemA",
    "content-type": "application/json",
    "customer_uid": "BQ5Ue8K9liX1mVDypqexLahafeZe",
    "fingerprint": "2e346efb3083b14470965fb9d9ccb95b",
    "platform": "WEB",
    "platform-version": "0.0.34",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "trace-uuid": "c1d5f36a-e340-4fd9-84ce-6ec45408e7f5"
  },
  "referrerPolicy": "no-referrer",
  "body": "{\"platform\":\"WEB\"}",
  "method": "POST"
}).then(res=>res.json()).then(res=>console.log(res))
}




setInterval(()=>{
    claim()
    startFarming()
    
},60000)
