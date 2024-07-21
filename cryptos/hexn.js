const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer");
const {setTimeout} = require('node:timers/promises');

const urls = [
  `https://tgapp.hexn.cc/#tgWebAppData=user%3D%257B%2522id%2522%253A6345740789%252C%2522first_name%2522%253A%2522%25D8%25B7%25D9%2584%25D8%25AD%25DB%2581%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522TalhaRaiz%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26chat_instance%3D-2184345488286448641%26chat_type%3Dchannel%26auth_date%3D1721381164%26hash%3D98e62332a40b64e6a4dca1039716c876d9125dbc59d220b6eb32bf536808dc10&tgWebAppVersion=7.6&tgWebAppPlatform=android&tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23ffffff%22%2C%22section_bg_color%22%3A%22%23ffffff%22%2C%22secondary_bg_color%22%3A%22%23f0f0f0%22%2C%22text_color%22%3A%22%23222222%22%2C%22hint_color%22%3A%22%23a8a8a8%22%2C%22link_color%22%3A%22%232678b6%22%2C%22button_color%22%3A%22%2350a8eb%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22header_bg_color%22%3A%22%23527da3%22%2C%22accent_text_color%22%3A%22%231c93e3%22%2C%22section_header_text_color%22%3A%22%233a95d5%22%2C%22subtitle_text_color%22%3A%22%2382868a%22%2C%22destructive_text_color%22%3A%22%23cc2929%22%2C%22section_separator_color%22%3A%22%23d9d9d9%22%7D `
];
let browser = null;
const LaunchBrowser = async()=>{
  try {
      browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  } catch (error) {
    console.log(error)
    throw new Error('Error Launching Browser')
  }
}
const func = async(url) => {
  // Launch the browser
  if(!browser) await LaunchBrowser()
  // Open a new page
  const page = await browser.newPage();
  // Navigate to the desired URL
  await page.goto(url);
  // Wait for 10 seconds
  await setTimeout(1000);
  // Take a screenshot and save it

  setInterval(async ()=>{
          try {
            await page.screenshot({ path: './images/hexn.png' });
            await page.click('.FarmingActions_farmingButton__3qY4A')
           
          } catch (error) {
            console.log(error)
          }
      },10000)

  // Close the browser

};


 func(urls[0])

