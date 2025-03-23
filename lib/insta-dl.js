const window = {
    location:{
  
      hostname:"snapinst.app"
    }
  }
  const cheerio = require('cheerio');
  
  function parseURLs(html) {
      const $ = cheerio.load(html);
      const urls = {
        thumbnail:null,
        video:null,
      }
  
      // Extract URLs from img src attributes
      $('img').each((i, element) => {
          const src = $(element).attr('src');
          if (src) {
              urls.thumbnail = src;
          }
      });
  
      // Extract URL from the download button
      $('.download-media').each((i, element) => {
          const href = $(element).attr('href');
          if (href) {
              urls.video = href;
          }
      });
  
     
  
      return urls;
  }
  const gtag = ()=>{
  
  }
  const app = {
    showModalAd(){
  
    }
  }
  let document = {
    // Store elements in an object to persist their state
    elements: {},
    getElementById(id) {
      console.log(id);
      // If the element doesn't exist yet, create it
      if (!this.elements[id]) {
        this.elements[id] = {
          innerHTML: id, // Initial value (can be changed later)
          remove() {
            delete document.elements[id]; // Optional: clean up
          }
        };
      }
      // Return an object that can get/set innerHTML
      return {
        get innerHTML() {
          return document.elements[id].innerHTML;
        },
        set innerHTML(value) {
          document.elements[id].innerHTML = value;
        },
        remove: this.elements[id].remove
      };
    }
  };
  const instaDl = async (url)=>{
    try {
      const data = await fetch("https://snapinst.app/action2.php", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
          "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryaCYvdU60BUh8jwOY",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Microsoft Edge\";v=\"134\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "cookie": "_ga=GA1.1.119608704.1742714219; __gads=ID=ab68015a361d3023:T=1742714220:RT=1742714220:S=ALNI_MYEwuz22layLdgTzeAXrco_kDEFxQ; __eoi=ID=78892a753b5ce0e1:T=1742714220:RT=1742714220:S=AA-AfjZZtrD16n33t6yDwzbN_q1k; PHPSESSID=qd3n93vbkqfb2n5ugp924qnen5; _ga_KRGK6ZLJ70=GS1.1.1742714219.1.1.1742714304.0.0.0",
          "Referer": "https://snapinst.app/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `------WebKitFormBoundaryaCYvdU60BUh8jwOY\r\nContent-Disposition: form-data; name=\"url\"\r\n\r\n${url}/\r\n------WebKitFormBoundaryaCYvdU60BUh8jwOY\r\nContent-Disposition: form-data; name=\"action\"\r\n\r\npost\r\n------WebKitFormBoundaryaCYvdU60BUh8jwOY\r\nContent-Disposition: form-data; name=\"lang\"\r\n\r\n\r\n------WebKitFormBoundaryaCYvdU60BUh8jwOY\r\nContent-Disposition: form-data; name=\"cf-turnstile-response\"\r\n\r\n0.aMRbEJLrwjO5DK3KR6uEgz5Tl-EdDREKe_pydZP2A8A1gN9Gdx4RSwbGNrZ-nBy70E_OgVGIWJtzERUoSq0HmVMk-IoeREsA9c3cJ2brkRmIA1MwzKruTNnGqtOWITd-g_IjCGAaiQ1lcd90xpG3lLU72w5KkNc--IhqmNEZAlV4rrFV43caJ3RRBpM-zLoPgK4jHIqlRcHmRA1ISpE0Aks33SzdiDeqQ25ElFml2nHwSb8vGcV-GsBrSksXDze5IjzFPNrb78Bc3rrT_N4s8KOw_Gf178lQ7e6QVnhhdZd9_3SYbpjgCk1kHT4a7nqqH8Yg25cqcL6BBpGR92SBxbRonT0CtVlyc0sQ_V20dpboLAnZFKnPHCxuatFrk33Rp8lJxrw387U6JQUiZHKBcyW0ERzLO6EFBuvrJ2C33_DgPO9Zoq30imGcK6pExenQgkWL5ovo5YenUkphwSomVOZhKoW55mPI4aI0EEk9zQVrCDrLpSRSk62UqjHXqbO9jgHRDtMrsDK02fPFr3-KeQW8Dh1b1exNQp5ZRYrsvrGe18lvwh-BqUoi0DpOhC2tOm3PZLesPXp6vfohmQAqixLX77NX9cPC5RpTul3GVV_tsjvUJniEY2W2y5rRvjvPsyhRzZ0bnXijByqTaoi1dKLlkUsck7JETWK2aRvL3p4kz8KSJo0AwSP-nJ1fP-GjohqmjZIFnp9YBhnRKwrEkRfVLxWTf9ftp6i6uwl5gPuiLdqNFe2h9Y6ZK26Wl24QIzNASloyM_O9FSS0fPedh9FMpqulpArnUzat7cxP4ux0d0du5Of3_Tbpo3iFuvTf3eQ3vNYCKih5DeV6yRFPE98GFtTDyVy7KqaHqRI1gzA.vnjUHIxoB1T-4xlV-O5rhg.3443d3dbfbeb9014f983f189bc30ee2e0817df4c4f8076238a510fa88beae14c\r\n------WebKitFormBoundaryaCYvdU60BUh8jwOY\r\nContent-Disposition: form-data; name=\"token\"\r\n\r\n3aMTc0MjcxMzc1NA==c\r\n------WebKitFormBoundaryaCYvdU60BUh8jwOY--\r\n`,
        "method": "POST"
      });
      const res = await data.text();
      eval (String.raw`${res}`) 
      return parseURLs(document.getElementById("download").innerHTML)
    } catch (error) {
      console.log(error)
    }
  }  
  module.exports = {instaDl}
//   instaDl('https://www.instagram.com/reel/DHDg9fwPee8/').then(console.log)