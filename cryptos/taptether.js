const moment = require('moment-timezone');
const tap = async()=>{
    
// Get the current timestamp in Asia/Karachi time zone
const karachiTimestamp = moment.tz('Asia/Karachi').unix();

// Convert to string and get the first 10 digits
const truncatedTimestamp = karachiTimestamp.toString().substring(0, 10);

console.log(truncatedTimestamp); 
const url = 'https://tap-tether.org/server/clicks?clicks=4&lastClickTime='+truncatedTimestamp;

const headers = {
    'access-control-allow-origin': '*',
    'accept': 'application/json, text/plain, */*',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Android WebView";v="126"',
    'sec-ch-ua-mobile': '?1',
    'authorization': 'tma user=%7B%22id%22%3A5845703815%2C%22first_name%22%3A%22Red%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22RedDevilv1%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=9109693686360469539&chat_type=sender&start_param=EF14LVK&auth_date=1721538003&hash=349a632604ce4f2e045a78dc418de25ec44b69621c4cf72f4a44429d40e2cece',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; TECNO LD7 Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/126.0.6478.134 Mobile Safari/537.36',
    'sec-ch-ua-platform': '"Android"',
    'x-requested-with': 'org.telegram.messenger',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://tap-tether.org/?tgWebAppStartParam=EF14LVK',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en,en-US;q=0.9',
    'priority': 'u=1, i'
};

fetch(url, {
    method: 'GET',
    headers: headers
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

}

setInterval(()=>{
    tap()
},7000)