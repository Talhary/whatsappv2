const axios = require('axios');
const {setTimeout} = require('node:timers/promises');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoYXNfZ3Vlc3QiOmZhbHNlLCJ0eXBlIjoiQUNDRVNTIiwiaXNzIjoiYmx1bSIsInN1YiI6Ijc1NDJlYjFmLTFmZTMtNGU0OS04NDhmLTU5MGQyMWU0MzBiMSIsImV4cCI6MTcyMjA2OTc5MiwiaWF0IjoxNzIyMDY2MTkyfQ.yBMSiu4gFLoPtddHRTBaPVKRAYFD5y_Kk_Bw2j_jxf8';
async function playGame() {
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

  async function claimGame() {
    const url = 'https://game-domain.blum.codes/api/v1/game/claim';
    
    const headers = {
        'Host': 'game-domain.blum.codes',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Android WebView";v="126"',
        'sec-ch-ua-mobile': '?1',
        'Authorization': `Bearer ${token}`,
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
   
    const tokenn = await playGame()
    if(!tokenn) return
   await setTimeout(30000);
    const data = {
        gameId: tokenn,
        points: 350+Math.floor(Math.random()* 50)
    };

    try {
        const response = await axios.post(url, data, { headers });
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}
const runGame = async()=>{
    for(let i =0 ;i<=200;i++)
      await claimGame();
}
   
   runGame()