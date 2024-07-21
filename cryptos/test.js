const axios = require('axios');
const crypto = require('crypto');

// Generate a new query ID
const newQueryId = `AAGij0NzAAAAAKKPQ3M${crypto.randomBytes(5).toString('hex')}`;

// Generate a new auth date (current Unix timestamp)
const newAuthDate = Math.floor(Date.now() / 1000);

// User data
const userData = {
  id: 1933807522,
  first_name: 'طلحہ',
  last_name: '',
  username: 'TalhaRiaz',
  language_code: 'en',
  allows_write_to_pm: true
};

// Combination 1: Include user agent in the hash
const userAgent = 'Mozilla/5.0 (Linux; Android 10; TECNO LD7 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.134 Mobile Safari/537.36';
const platform = 'android';
const origin = 'https://timefarm.app';
const dataToHash5 = `${userData.id}${userData.first_name}${userData.last_name}${userData.username}${userData.language_code}${userData.allows_write_to_pm}${newAuthDate}${platform}${origin}`;
const newHash1 = crypto.createHash('sha256').update(dataToHash5).digest('hex');

// Construct the new initData
const newInitData1 = `query_id=${newQueryId}&user=%7B%22id%22%3A${userData.id}%2C%22first_name%22%3A%22${encodeURIComponent(userData.first_name)}%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22${userData.username}%22%2C%22language_code%22%3A%22${userData.language_code}%22%2C%22allows_write_to_pm%22%3A${userData.allows_write_to_pm}%7D&auth_date=${newAuthDate}&hash=${newHash1}`;

// Request body
const requestBody1 = {
  initData: newInitData1,
  platform: 'android'
};

// Request headers
const headers = {
  'Host': 'tg-bot-tap.laborx.io',
  'Content-Length': JSON.stringify(requestBody1).length,
  'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Android WebView";v="126"',
  'sec-ch-ua-platform': '"Android"',
  'sec-ch-ua-mobile': '?1',
  'User-Agent': userAgent,
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'Origin': 'https://timefarm.app',
  'X-Requested-With': 'org.telegram.messenger',
  'sec-fetch-site': 'cross-site',
  'sec-fetch-mode': 'cors',
  'sec-fetch-dest': 'empty',
  'Referer': 'https://timefarm.app/',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Accept-Language': 'en,en-US;q=0.9',
  'Priority': 'u=1, i'
};

// Make the POST request
axios.post('https://tg-bot-tap.laborx.io/api/v1/auth/validate-init/v2', requestBody1, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
