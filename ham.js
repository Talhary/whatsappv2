const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer");
const {setTimeout} = require('node:timers/promises')

const url = `https://hamsterkombat.io/clicker#tgWebAppData=query_id%3DAAH1UTx6AgAAAPVRPHrzKAiJ%26user%3D%257B%2522id%2522%253A6345740789%252C%2522first_name%2522%253A%2522%25D8%25B7%25D9%2584%25D8%25AD%25DB%2581%2522%252C%2522last_name%2522%253A%2522%2522%252C%2522username%2522%253A%2522TalhaRaiz%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1720597911%26hash%3D7309dd24306f60a28f129160f20cc6bcd92d50a518368cccd992a4471acab3d0&tgWebAppVersion=7.6&tgWebAppPlatform=android&tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23212d3b%22%2C%22section_bg_color%22%3A%22%231d2733%22%2C%22secondary_bg_color%22%3A%22%23151e27%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22hint_color%22%3A%22%237d8b99%22%2C%22link_color%22%3A%22%235eabe1%22%2C%22button_color%22%3A%22%2350a8eb%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22header_bg_color%22%3A%22%23242d39%22%2C%22accent_text_color%22%3A%22%2364b5ef%22%2C%22section_header_text_color%22%3A%22%2379c4fc%22%2C%22subtitle_text_color%22%3A%22%237b8790%22%2C%22destructive_text_color%22%3A%22%23ee686f%22%2C%22section_separator_color%22%3A%22%230d1218%22%7D `

const func = async()=>{
  // Launch the browser
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });
  // Open a new page
  const page = await browser.newPage();
  // Navigate to the desired URL
  await page.goto(url);
  // Wait for 10 seconds
  await setTimeout(5000)
  // Take a screenshot and save it
  await page.screenshot({ path: 'screenshot.png' });
  // Close the browser
  await browser.close();
}
setInterval(()=>{
  func()
},5000)