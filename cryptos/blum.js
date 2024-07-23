async function playGame(token) {
    const url = 'https://game-domain.blum.codes/api/v1/game/play';
    
    const headers = {
      'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Android WebView";v="126"',
      'accept': 'application/json, text/plain, */*',
      'sec-ch-ua-mobile': '?1',
      'authorization': `Bearer ${token}`,
      'user-agent': 'Mozilla/5.0 (Linux; Android 10; TECNO LD7 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.134 Mobile Safari/537.36',
      'sec-ch-ua-platform': '"Android"',
      'origin': 'https://telegram.blum.codes',
      'x-requested-with': 'org.telegram.messenger',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en,en-US;q=0.9',
      'priority': 'u=1, i',
      'content-length': '0'
    };
  
    const options = {
      method: 'POST',
      headers: headers
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.gameId)
      return data.gameId;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  
  // Usage example
  const axios = require('axios');
  const {setTimeout} = require('node:timers/promises');
 
async function claimGame() {
    const url = 'https://game-domain.blum.codes/api/v1/game/claim';
    const accesss = await updateToken1()
    const headers = {
        'Host': 'game-domain.blum.codes',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Android WebView";v="126"',
        'sec-ch-ua-mobile': '?1',
        'Authorization': `Bearer ${accesss.access}`,
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; TECNO LD7 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.134 Mobile Safari/537.36',
        'sec-ch-ua-platform': '"Android"',
        'Origin': 'https://telegram.blum.codes',
        'x-requested-with': 'org.telegram.messenger',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en,en-US;q=0.9',
        'priority': 'u=1, i'
    };
   
   const tokenn = await playGame(accesss.access)
   if(!tokenn) return
   await setTimeout(30000);
    const data = {
        gameId: tokenn,
        points: 400
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}
const generateToken =  async(token)=>{
  
    
    
  const url = 'https://gateway.blum.codes/v1/auth/refresh';
  const headers = {
      'Host': 'gateway.blum.codes',
      'Content-Length': '266',
      'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Android WebView";v="126"',
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'sec-ch-ua-mobile': '?1',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; TECNO LD7 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.134 Mobile Safari/537.36',
      'sec-ch-ua-platform': '"Android"',
      'Origin': 'https://telegram.blum.codes',
      'x-requested-with': 'org.telegram.messenger',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en,en-US;q=0.9',
      'priority': 'u=1, i'
  };

  const data = {
      refresh: token
  };

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
      });

      const responseData = await response.json();
      console.log('Response:', responseData);
      return responseData
  } catch (error) {
      console.error('Error:', error);
  }

}



const Delete = async()=>{

  const Connect = require('../mongo/index.js')
  const model = require('../mongo/model/token.js')
   await Connect()
   await model.create({id:'chatbotaccount',access:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoYXNfZ3Vlc3QiOmZhbHNlLCJ0eXBlIjoiQUNDRVNTIiwiaXNzIjoiYmx1bSIsInN1YiI6Ijc1NDJlYjFmLTFmZTMtNGU0OS04NDhmLTU5MGQyMWU0MzBiMSIsImV4cCI6MTcyMTU1NTM3MSwiaWF0IjoxNzIxNTUxNzcxfQ.8DN23CpJ0BYjCmhryr7G0S4_HpdDoR4a0vpCnyM_qs4',token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoYXNfZ3Vlc3QiOmZhbHNlLCJ0eXBlIjoiUkVGUkVTSCIsImlzcyI6ImJsdW0iLCJzdWIiOiI3NTQyZWIxZi0xZmUzLTRlNDktODQ4Zi01OTBkMjFlNDMwYjEiLCJleHAiOjE3MjE2MzgxNzEsImlhdCI6MTcyMTU1MTc3MX0.LDVoPSHSIHDuJbYoQ6VSmy6ZS8VyiOEE4qMl5puXGT8'})
}
// Delete()
const updateToken1= async(token)=>{
const Connect = require('../mongo/index.js')
const model = require('../mongo/model/token.js')
 await Connect()
 const newToken = await model.findOne({id:'chatbotaccount'})
 
 console.log(newToken)
 if(checkTokenTime(newToken.token)){
  return newToken;
 }
   const freshToken= generateToken(newToken.token)
  await model.findOneAndUpdate({id:'chatbotaccount'},{token:freshToken.refresh,access:freshToken.access})
  return freshToken
}
function decodeJWT(token) {
const base64Url = token.split('.')[1]; // Get the payload part of the token
const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Convert Base64URL to Base64
const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
}).join('')); // Decode Base64 to JSON

return JSON.parse(jsonPayload); // Parse JSON and return it
}
const checkTokenTime = (newtoken)=>{
const exp = decodeJWT(newtoken).exp
const current = Math.floor(Date.now() / 1000);
if(exp<current)
return false
else return true

}
const runGame = async()=>{
 for(let i =0 ;i<=200;i++)
 await claimGame();
}

// runGame()


// updateToken1().then(res=>console.log(res))
// generateToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoYXNfZ3Vlc3QiOmZhbHNlLCJ0eXBlIjoiUkVGUkVTSCIsImlzcyI6ImJsdW0iLCJzdWIiOiI3NTQyZWIxZi0xZmUzLTRlNDktODQ4Zi01OTBkMjFlNDMwYjEiLCJleHAiOjE3MjE2MzI1MDMsImlhdCI6MTcyMTU0NjEwM30.GGjwza2aLrXjRpNtIriJz2-RVgmJv97fRb8WAxv4IBA')
// updateToken1(res=>console.log(res))
