const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer");
const {setTimeout} = require('node:timers/promises');

const urls = [
  `https://bot.monorix.com/#tgWebAppData=query_id%3DAAGij0NzAAAAAKKPQ3Ov-kDO%26user%3D%257B%2522id%2522%253A1933807522%252C%2522first_name%2522%253A%2522%25D8%25B7%25D9%2584%25D8%25AD%25DB%2581%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522TalhaRiaz%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1721108075%26hash%3Da069ac6823416be83a7fa4529d5a916f6dc08a7e3c6418d86cf0bbaa16969546&tgWebAppVersion=7.6&tgWebAppPlatform=android&tgWebAppBotInline=1&tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23212d3b%22%2C%22section_bg_color%22%3A%22%231d2733%22%2C%22secondary_bg_color%22%3A%22%23151e27%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22hint_color%22%3A%22%237d8b99%22%2C%22link_color%22%3A%22%235eabe1%22%2C%22button_color%22%3A%22%2350a8eb%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22header_bg_color%22%3A%22%23242d39%22%2C%22accent_text_color%22%3A%22%2364b5ef%22%2C%22section_header_text_color%22%3A%22%2379c4fc%22%2C%22subtitle_text_color%22%3A%22%237b8790%22%2C%22destructive_text_color%22%3A%22%23ee686f%22%2C%22section_separator_color%22%3A%22%230d1218%22%7D`
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
  await setTimeout(10000);
  // Take a screenshot and save it
  await page.screenshot({ path: './images/Monorix.png' });

  // Close the browser

};

setInterval(() => {
  urls.forEach(url => func(url));
}, 15000);
