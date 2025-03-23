const axios = require("axios");
const cheerio = require('cheerio')
const sendErrorMessage = async (client, m) => {
  return client.sendMessage(
    m.sender,
    { text: "Something went wrong" },
    { quoted: m }
  );
};
const parseFb = async  (url)=>{
  try {
    const data = await fetch("https://fdown.net/download.php", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "priority": "u=0, i",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Microsoft Edge\";v=\"134\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "cookie": "_ga=GA1.1.275179942.1742712908; __gads=ID=0c25efb56995ffc2:T=1742712910:RT=1742712910:S=ALNI_MYsYtiiXHFxOfEa1MulLo9G1-46QQ; __eoi=ID=c75cbcffb04d15cb:T=1742712910:RT=1742712910:S=AA-Afjbft583WYfyol8Tpqktu3YQ; FCNEC=%5B%5B%22AKsRol_eraD6X5TgSyH_71M9Hw_W6TOSBk4sbu0lhuuLxGhLjx7M3uhWwDFk-w-mAWezvC9C0xt4rz8J79B3T_BmhxR_N5w-ckYuFVZPPutMEqQc-UPU-EbtvEXbRJn4_Wut6Mse6lMq_TCF83EN4A52kFRW0qsVVg%3D%3D%22%5D%5D; _ga_82ERN9JZD3=GS1.1.1742712908.1.0.1742712992.60.0.0",
        "Referer": "https://fdown.net/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": `URLz=${url}`,
      "method": "POST"
    });
    const res = await data.text();
    return getVideoUrls(res)
    

  } catch (error) {
    console.log(error)
  }
}
 const sendVideoMessage = async (client, m, videoUrl, caption = "") => {
  try {
    await client.sendMessage(
      m.sender,
      {
        video: { url: videoUrl },
        caption: caption,
        mimetype: "video/mp4",
      },
      { quoted: m }
    );
  } catch (error) {
    console.error("Error sending video:", error);
    await sendErrorMessage(client, m);
  }
};

const FbDlonError = async (client, m, url) => {
  try {
    // Implement your own Facebook video extraction logic here
    // This is a placeholder - you'll need to add your own implementation
    const videoUrl = "";
    const caption = "Facebook Video";

    if (videoUrl) {
      await sendVideoMessage(client, m, videoUrl, caption);
      return;
    }

    await sendErrorMessage(client, m);
  } catch (error) {
    console.error("Facebook download error:", error);
    await sendErrorMessage(client, m);
  }
};

const InDlonError = async (client, m, url) => {
  try {
    // Implement your own Instagram video extraction logic here
    // This is a placeholder - you'll need to add your own implementation
    const videoUrl = "";
    const caption = "Instagram Video";

    if (videoUrl) {
      await sendVideoMessage(client, m, videoUrl, caption);
      return;
    }

    await sendErrorMessage(client, m);
  } catch (error) {
    console.error("Instagram download error:", error);
    await sendErrorMessage(client, m);
  }
};

const FbNayan = async (client, m, url) => {
  try {

    if (!url) {
      return client.sendMessage(
        m.chat,
        { text: "Please provide a valid url" },
        { quoted: m }
      );
    }

    const videoUrl = url;
    const caption = "Facebook Video";

    if (videoUrl) {
      const {sd,hd} = await parseFb(videoUrl)
      // await sendVideoMessage(client, m, sd, caption);
      await sendVideoMessage(client, m, hd, caption);
      return;
    }

    await FbDlonError(client, m, url);
  } catch (error) {
    console.error("Facebook download error:", error);
    await FbDlonError(client, m, url);
  }
};

const TiktokNayan = async (client, m, url) => {
  try {
    if (!url) {
      return client.sendMessage(
        m.chat,
        { text: "Please provide a valid url" },
        { quoted: m }
      );
    }

    // Implement your own TikTok video extraction logic here
    // This is a placeholder - you'll need to add your own implementation
    const videoUrl = "";
    const caption = "TikTok Video";

    if (videoUrl) {
      await sendVideoMessage(client, m, videoUrl, caption);
      return;
    }

    await sendErrorMessage(client, m);
  } catch (error) {
    console.error("TikTok download error:", error);
    await sendErrorMessage(client, m);
  }
};

const twitterNayan = async (client, m, url) => {
  try {
    if (!url) {
      return client.sendMessage(
        m.chat,
        { text: "Please provide a valid url" },
        { quoted: m }
      );
    }

    // Implement your own Twitter video extraction logic here
    // This is a placeholder - you'll need to add your own implementation
    const videoUrl = "";
    const caption = "Twitter Video";

    if (videoUrl) {
      await sendVideoMessage(client, m, videoUrl, caption);
      return;
    }

    await sendErrorMessage(client, m);
  } catch (error) {
    console.error("Twitter download error:", error);
    await sendErrorMessage(client, m);
  }
};
function getVideoUrls(html) {
  const $ = cheerio.load(html);
  const videoUrls = {};
  
  // Get SD quality video URL
  const sdLink = $('#sdlink').attr('href');
  if (sdLink) {
      videoUrls.sd = sdLink;
  }
  
  // Get HD quality video URL
  const hdLink = $('#hdlink').attr('href');
  if (hdLink) {
      videoUrls.hd = hdLink;
  }
  
  return videoUrls;
}
module.exports = { FbNayan, TiktokNayan, twitterNayan, InDlonError,sendVideoMessage };

// parseFb('https://www.facebook.com/share/r/18ogCY8ZG1/?mibextid=UalRPS')

