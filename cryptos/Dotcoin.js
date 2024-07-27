const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqdm5tb3luY21jZXdudXlreWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3MDE5ODIsImV4cCI6MjAyNDI3Nzk4Mn0.oZh_ECA6fA2NlwoUamf1TqF45lrMC0uIdJXvVitDbZ8'


const axios = require('axios');
const Headers = {
    'content-length': 353,
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'content-type': 'application/json',
    'sec-ch-ua-mobile': '?1',
    'authorization': `Bearer ${token}`,
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
    'sec-ch-ua-platform': '"Android"',
    'accept': '*/*',
    'origin': 'https://app.dotcoin.bot',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://app.dotcoin.bot/',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.9',
    'priority': 'u=1, i'
  };

async function getToken() {
  const url = 'https://api.dotcoin.bot/functions/v1/getToken';
  const data = {
    initData: "query_id=AAGij0NzAAAAAKKPQ3N8Xoo3&user=%7B%22id%22%3A1933807522%2C%22first_name%22%3A%22%D8%B7%D9%84%D8%AD%DB%81%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22TalhaRiaz%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1721469648&hash=101135d180192f5b231e27d3114dd7e4d94285501c195a7ad9f74b9e4e7d3771"
  };
  try {
    const response = await axios.post(url, data, { headers:Headers });
    console.log(response.data);
    return response.data?.token
  } catch (error) {
    console.error('Error making the request:', error);
  }
}




async function saveCoins() {
  const url = 'https://api.dotcoin.bot/rest/v1/rpc/save_coins';
  const data = {
    coins: 10000
  };

  const headers = {
    'content-length': 15,
    'x-client-info': 'postgrest-js/0.0.0-automated',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-mobile': '?1',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWxlZ3JhbUlkIjoxOTMzODA3NTIyLCJpYXQiOjE3MjE0Njk5MDZ9.-DetslC59EhrzX7qxsgE-gJFGSFWSIcNdDZ2mgSJkFE',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
    'content-type': 'application/json',
    'content-profile': 'public',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqdm5tb3luY21jZXdudXlreWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3MDE5ODIsImV4cCI6MjAyNDI3Nzk4Mn0.oZh_ECA6fA2NlwoUamf1TqF45lrMC0uIdJXvVitDbZ8',
    'x-telegram-user-id': '1933807522',
    'sec-ch-ua-platform': '"Android"',
    'accept': '*/*',
    'origin': 'https://app.dotcoin.bot',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://app.dotcoin.bot/',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.9',
    'priority': 'u=1, i'
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data
    // console.log(response.data);
  } catch (error) {
    console.error('Error making the request:', error);
  }
}


async function restoreAttempt() {
  const url = 'https://api.dotcoin.bot/rest/v1/rpc/restore_attempt';
  const data = {};

  const headers = {
    'content-length': 2,
    'x-client-info': 'postgrest-js/0.0.0-automated',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-mobile': '?1',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWxlZ3JhbUlkIjoxOTMzODA3NTIyLCJpYXQiOjE3MjE0Njk5MDZ9.-DetslC59EhrzX7qxsgE-gJFGSFWSIcNdDZ2mgSJkFE',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
    'content-type': 'application/json',
    'content-profile': 'public',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqdm5tb3luY21jZXdudXlreWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3MDE5ODIsImV4cCI6MjAyNDI3Nzk4Mn0.oZh_ECA6fA2NlwoUamf1TqF45lrMC0uIdJXvVitDbZ8',
    'x-telegram-user-id': '1933807522',
    'sec-ch-ua-platform': '"Android"',
    'accept': '*/*',
    'origin': 'https://app.dotcoin.bot',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://app.dotcoin.bot/',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.9',
    'priority': 'u=1, i'
  };

  try {
    const response = await axios.post(url, data, { headers });
    // console.log(response.data);
  } catch (error) {
    console.error('Error making the request:', error);
  }
}
saveCoins().then(res=>console.log(res))
// setInterval(()=>{
//    saveCoins()
//   restoreAttempt();

// },1000)






