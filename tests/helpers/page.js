const puppeteer = require("puppeteer");
const createTokens = require("../factories/adminSession");

class CustomPage {
  constructor() {
    this.browser = null;
    this.page = null;
  }
  async initialize() {
    this.browser = await puppeteer.launch({
      defaultViewport: null,
      headless:true,
    });
    this.page = await this.browser.newPage();
  }
  async click(item){
    await this.page.click(item)
  }
  async close() {
    await this.browser.close();
  }
  async getContentsOf(selector) {
    return this.page.$eval(selector,el=>el.innerHTML);
  }
  async login(){
    const {accessTokenJWT,refreshTokenJWT,user} = createTokens();
    const localUser = JSON.stringify(user);
    await this.page.evaluate((localUser) => {
      localStorage.setItem("user", localUser);
    },localUser);
    await this.page.setCookie({ name: "accessToken", value: accessTokenJWT})
    await this.page.setCookie({ name: "refreshToken", value: refreshTokenJWT})
  }
}

module.exports = CustomPage;