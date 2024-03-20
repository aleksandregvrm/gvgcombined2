const Page = require("./helpers/page");

let customPage;

beforeEach(async () => {
  customPage = new Page();
  await customPage.initialize(); 
  await customPage.page.goto('http://localhost:5002')
});
afterEach(async () => {
  await customPage.close();
});

describe("we started HomePage tests and visually...", () => {
  test("introduction button works", async () => {
    await customPage.click(".introduction-img-btn");
    const paragraphText = await customPage.getContentsOf(".text-container p");
    expect(paragraphText).toContain("Georgian Vending Group");
  });

  test("Image Slider works well", async () => {
    await customPage.click(".dot");
    const hasActiveClass = await customPage.page.$eval(".dot", (element) => {
      return element.classList.contains("active");
    });
    expect(hasActiveClass).toBeTruthy();
  });
});

describe("Authorization button", () => {
  test("transforms to login page", async () => {
    await customPage.click(".authorization .logo-icon");
    const url = await customPage.page.url();
    expect(url).toMatch(/login/);
  });
});
describe("We click Search button and...", () => {
  test("transports to whatever page is needed", async () => {
    let inputPlaceholderValue = await customPage.page.$eval(
      ".search-bar input",
      (input) => input.placeholder
    );
    inputPlaceholderValue = inputPlaceholderValue.split("...")[0];
    await customPage.page.goto(
      `http://localhost:5002/${inputPlaceholderValue}`
    );
    expect(customPage.page.url()).toContain(inputPlaceholderValue);
  });
});
