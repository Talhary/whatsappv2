const fs = require('fs');
const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('./my-func.js')
const ytdl = require('../ytdl-core/ytdl-core/lib/index.js');
const yta = require('./ytaudio.js')
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above
// const ytdld = async () => {
    
//     ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
//     .pipe(fs.createWriteStream('video.mp4'));

// }
// ytdld()
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb

module.exports = ytd =async(Void, m, text) => {
    return Void.sendMessage(m.sender, {
    document: {
        url: `https://youtube-player-2bad53bddb91.herokuapp.com/api/v1/video?url=${text}`
    },
    mimetype: 'video/mp4',
    fileName: 'video.mp4'
});

    console.log('runnig ytd from me')
    const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
    if (!text) {
        m.reply(`❌Please provide me a url`);
        return;
    }
    try {
        let urlYt = text;
        if (!urlYt.startsWith("http")) return m.reply(`❌ Give youtube link!`);
        let infoYt = await ytdl.getInfo(urlYt,{
            requestOptions: {
    headers: {
      Cookie: `VISITOR_PRIVACY_METADATA=CgJQSxIEGgAgDw%3D%3D;_gcl_au=1.1.1160943843.1717164232;__Secure-3PSID=g.a000mwifhiPgpai2VOySwecxKGLOugoWhSEaMBFapIQcS6LwFnS6dPALLqhl5xqSB_aA9Tn1-QACgYKAfsSARUSFQHGX2MisaEVOxJBqP1L8MoRsP25lxoVAUF8yKrxgUsbqPGziOb3_eFY2jDg0076;SIDCC=AKEyXzWsExMDsvssFJF5S7tqHznck9Wrw_x9ScOr8hJ0Wwy8OLyNYoaFDZ93kHv6RyFsoJ-jF8Q;SID=g.a000mwifhiPgpai2VOySwecxKGLOugoWhSEaMBFapIQcS6LwFnS6pGvBYboU7nkauWWLrYjtlgACgYKAbUSARUSFQHGX2MiNUaACA_ppFyQPJPTPkRiZBoVAUF8yKq6tDadePAZ3GORb4yt82p10076;__Secure-1PSIDTS=sidts-CjEBUFGoh89v8aeaJ7vFK5Wp6bpBqNqXFuFWne62AGnP2o-zqaEwt9jremvsicNZFoCfEAA;SAPISID=hpnn2Zu6HqtKXZNc/ANxQ1ey7ospPwBG5-;__Secure-1PSIDCC=AKEyXzWtC39pcX_f-lNpdqDbVqM1LhNP_UIoVEHYvMKG35WAozQaw4dO0ulQC9HAIpX3PwhC2P0;SSID=AF9l2vwP1hlNJkFsF;__Secure-1PAPISID=hpnn2Zu6HqtKXZNc/ANxQ1ey7ospPwBG5-;__Secure-1PSID=g.a000mwifhiPgpai2VOySwecxKGLOugoWhSEaMBFapIQcS6LwFnS6DXx-IK05hjVhdX23tnQBaAACgYKAS4SARUSFQHGX2MizTHUTcknGkAehwQpIQCQlxoVAUF8yKrJ6vWywapABFL5dz2OVfAW0076;__Secure-3PAPISID=hpnn2Zu6HqtKXZNc/ANxQ1ey7ospPwBG5-;__Secure-3PSIDCC=AKEyXzXiTO8cSk98mTFcioNt2W6be2qyI3z_YFyisRd8ij-xAl9aHJy_mHFUjGEtZzdk-vHPxg;__Secure-3PSIDTS=sidts-CjEBUFGoh89v8aeaJ7vFK5Wp6bpBqNqXFuFWne62AGnP2o-zqaEwt9jremvsicNZFoCfEAA;APISID=Mm4jK1odbhLRtgpS/A4CedpprVlOiHJVUb;HSID=AhR4NqC7UoNylrhqI;LOGIN_INFO=AFmmF2swRQIgOhFaZCPaXNkZO6JkldcRviMzLD7K-VPe4i4lAalza2UCIQDr-O3qjMYIA-6nJQAj3K6Pfkmw2V8LNGNhIW7_Ey0r4Q:QUQ3MjNmejVGVmw3eUhqRTlEZ2FEQUJMLTl6Yk1XdXE2dkRSMGV6anlJNEV2VU45SzZIZ01wa3hpWTNQY05PS05zVGV5ampaTkgxV0RwRmRMdnRNQjJ0dl9oZm41WmF0eFViNlUyMzdtVnBUZ3J4cnV2V0s2UHc1WUgyTDcySDh1Qksxd0JEdkxwamlFeXNPTkZ2OHkyUGZsV2g3UjIyV09n;PREF=f6=40000000&volume=56&f7=4100&tz=Asia.Karachi&repeat=NONE&autoplay=true&f5=20000;VISITOR_INFO1_LIVE=MEIk0-2m5KU`
    }
  }
        });
        
        if (infoYt.videoDetails.lengthSeconds >= videotime) {
            Void.sendMessage(m.sender,{text:'❌ Video Size is too Big'})
            return 
        } 
       
        let titleYt = infoYt.videoDetails.title;
        let descYt= infoYt.videoDetails.description
        let Owner = infoYt.videoDetails.ownerProfileUrl;
        let Views = infoYt.videoDetails.viewCount
        let UploadedDate = infoYt.videoDetails.uploadDate
        let channelName = infoYt.videoDetails.author.name;
        
        let randomName = getRandom(".mp4");

        const stream = ytdl(urlYt, {
                filter: (info) => info.itag == 22 || info.itag == 18,
            })
            .pipe(fs.createWriteStream(`./${randomName}`));
        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });
        Void.sendMessage(m.sender,{text:'⌛Please wait.'})
        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= dlsize) {
            const captions = ` ⿻ Title : ${titleYt}\n ⿻ File Size : ${Math.floor(fileSizeInMegabytes)} MB \n`
            let buttonMessage = {
                video: fs.readFileSync(`./${randomName}`),
                mimetype: 'video/mp4',
                fileName: `${titleYt}.mp4`,
                caption: captions,
                headerType: 4,
                
            }
         Void.sendMessage(m.sender, buttonMessage)

         return fs.unlinkSync(`./${randomName}`);
        } else {
            m.reply(`❌ File size bigger than 100mb.`);
        }
        return fs.unlinkSync(`./${randomName}`);      
    } catch (e) {
        console.log(e)
        Void.sendMessage(m.sender,{text:e.message})
    }
}
