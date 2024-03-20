const Page = require("./helpers/page");

let customPage;
beforeEach(async () => {
  customPage = new Page();
  await customPage.initialize();
  await customPage.page.goto("http://localhost:5002");
});
afterEach(async () => {
  await customPage.close();
});
describe("Subscription Event", () => {
  test("subscription fails without any text", async () => {
    await customPage.page.type(".subscribe-input", "");
    await customPage.click(".subscribe-btn");
  });
});
