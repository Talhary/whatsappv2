const fs = require('fs');
const ytdl = require('../ytdl-core/ytdl-core/lib/index.js');


 const getRandom = (ext) => {
        return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
module.exports = ytd =async(client, m, text,itag) => {

    
    if (!text) {
        m.reply(`❌Please provide me a url`);
        return;
    }
 return client.sendMessage(m.sender, {
    document: {
        url: `https://youtube-player-2bad53bddb91.herokuapp.com/api/v1/video?url=${text}`
    },
    mimetype: 'video/mp4',
    fileName: 'video.mp4'
});

    try {
       
        if (!text.startsWith("http")) return m.reply(`❌ Give youtube link!`);
        let infoYt = await ytdl.getInfo(text);
        let titleYt = infoYt.videoDetails.title;

        let randomName = getRandom(".mp4");
         const stream = ytdl(text, {
                filter: (info) => info.itag == itag || info.itag == 22 || info.itag == 18,
           requestOptions: {
    headers: {
      Cookie: `VISITOR_PRIVACY_METADATA=CgJQSxIEGgAgDw%3D%3D;_gcl_au=1.1.1160943843.1717164232;__Secure-3PSID=g.a000mwifhiPgpai2VOySwecxKGLOugoWhSEaMBFapIQcS6LwFnS6dPALLqhl5xqSB_aA9Tn1-QACgYKAfsSARUSFQHGX2MisaEVOxJBqP1L8MoRsP25lxoVAUF8yKrxgUsbqPGziOb3_eFY2jDg0076;SIDCC=AKEyXzWsExMDsvssFJF5S7tqHznck9Wrw_x9ScOr8hJ0Wwy8OLyNYoaFDZ93kHv6RyFsoJ-jF8Q;SID=g.a000mwifhiPgpai2VOySwecxKGLOugoWhSEaMBFapIQcS6LwFnS6pGvBYboU7nkauWWLrYjtlgACgYKAbUSARUSFQHGX2MiNUaACA_ppFyQPJPTPkRiZBoVAUF8yKq6tDadePAZ3GORb4yt82p10076;__Secure-1PSIDTS=sidts-CjEBUFGoh89v8aeaJ7vFK5Wp6bpBqNqXFuFWne62AGnP2o-zqaEwt9jremvsicNZFoCfEAA;SAPISID=hpnn2Zu6HqtKXZNc/ANxQ1ey7ospPwBG5-;__Secure-1PSIDCC=AKEyXzWtC39pcX_f-lNpdqDbVqM1LhNP_UIoVEHYvMKG35WAozQaw4dO0ulQC9HAIpX3PwhC2P0;SSID=AF9l2vwP1hlNJkFsF;__Secure-1PAPISID=hpnn2Zu6HqtKXZNc/ANxQ1ey7ospPwBG5-;__Secure-1PSID=g.a000mwifhiPgpai2VOySwecxKGLOugoWhSEaMBFapIQcS6LwFnS6DXx-IK05hjVhdX23tnQBaAACgYKAS4SARUSFQHGX2MizTHUTcknGkAehwQpIQCQlxoVAUF8yKrJ6vWywapABFL5dz2OVfAW0076;__Secure-3PAPISID=hpnn2Zu6HqtKXZNc/ANxQ1ey7ospPwBG5-;__Secure-3PSIDCC=AKEyXzXiTO8cSk98mTFcioNt2W6be2qyI3z_YFyisRd8ij-xAl9aHJy_mHFUjGEtZzdk-vHPxg;__Secure-3PSIDTS=sidts-CjEBUFGoh89v8aeaJ7vFK5Wp6bpBqNqXFuFWne62AGnP2o-zqaEwt9jremvsicNZFoCfEAA;APISID=Mm4jK1odbhLRtgpS/A4CedpprVlOiHJVUb;HSID=AhR4NqC7UoNylrhqI;LOGIN_INFO=AFmmF2swRQIgOhFaZCPaXNkZO6JkldcRviMzLD7K-VPe4i4lAalza2UCIQDr-O3qjMYIA-6nJQAj3K6Pfkmw2V8LNGNhIW7_Ey0r4Q:QUQ3MjNmejVGVmw3eUhqRTlEZ2FEQUJMLTl6Yk1XdXE2dkRSMGV6anlJNEV2VU45SzZIZ01wa3hpWTNQY05PS05zVGV5ampaTkgxV0RwRmRMdnRNQjJ0dl9oZm41WmF0eFViNlUyMzdtVnBUZ3J4cnV2V0s2UHc1WUgyTDcySDh1Qksxd0JEdkxwamlFeXNPTkZ2OHkyUGZsV2g3UjIyV09n;PREF=f6=40000000&volume=56&f7=4100&tz=Asia.Karachi&repeat=NONE&autoplay=true&f5=20000;VISITOR_INFO1_LIVE=MEIk0-2m5KU`
    }
  }
            })
            .pipe(fs.createWriteStream(`./${randomName}`));
        
        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });
        const captions = ` ⿻ Title : ${titleYt}\n `
         await client.sendMessage(m.sender, {
         document: {
         url:`./${randomName}` ,
          },
          mimetype:'video/mp4',
         fileName: `${titleYt}.mp4`,
                caption: captions,
          
       });
        fs.unlinkSync(`./${randomName}`)
        // if(itag){
        //  formats= stream.player_response.streamingData.formats
        //  if(formats[1])
        //  formats[0] = formats[1]

        // }
        // formats = stream.player_response.streamingData.adaptiveFormats.filter((el)=>el.itag==itag)
        // if(!formats[0]) {
        //  formats= stream.player_response.streamingData.formats
        // if(formats[1])
        //  formats[0] = formats[1]
        // }
        // console.log(formats)
        // getData(Void,m.sender,formats[0].url,'Youtube Video',formats[0].qualityLabel,'mp4')       

     
    } catch (e) {
        console.log(e)
        client.sendMessage(m.sender,{text:e.message})
    }
}

// ytd('','','https://www.youtube.com/watch?v=t7lUSiddFd4')
