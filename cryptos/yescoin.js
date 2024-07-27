const axios = require('axios');

const config = {
    method: 'post',
    url: 'https://api-backend.yescoin.gold/game/collectCoin',
    headers: {
        'Host': 'api-backend.yescoin.gold',
        'content-length': '2',
        'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Android WebView";v="126"',
        'accept': 'application/json, text/plain, */*',
        'content-type': 'application/json',
        'sec-ch-ua-mobile': '?1',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; TECNO LD7 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.134 Mobile Safari/537.36',
        'token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTMzODA3NTIyIiwiY2hhdElkIjoiMTkzMzgwNzUyMiIsImlhdCI6MTcyMTczOTMzMCwiZXhwIjoxNzI0MzMxMzMwLCJyb2xlQXV0aG9yaXplcyI6W10sInVzZXJJZCI6MTc5OTY1Mjg1Nzg3NzMzMTk2OH0.aATsiQwjBb-LbegTyR_ZGmJy0u-utzAJasRyJnEI8bUO2sH1OWUik-QhonekJM-sYbq_GJh_amSC2m3dJ9aszA',
        'sec-ch-ua-platform': '"Android"',
        'origin': 'https://www.yescoin.gold',
        'x-requested-with': 'org.telegram.messenger',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.yescoin.gold/',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en,en-US;q=0.9',
        'priority': 'u=1, i'
    },
    data: '99'
};

async function fetchData() {
    try {
      const res = await axios(config);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  
    // Set a random interval between 5 and 9 seconds (5000 to 9000 milliseconds)
    const randomInterval = Math.floor(Math.random() * (2000 - 1000 + 1)) + 5000;
    setTimeout(fetchData, randomInterval);
  }
  
  // Initial call to start the process
  fetchData();