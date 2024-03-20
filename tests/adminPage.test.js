const Page = require('./helpers/page');

let customPage;

beforeEach(async ()=>{
  customPage = new Page();
  await customPage.initialize();
  await customPage.page.goto("http://localhost:5002");
  await customPage.login();
  await customPage.page.goto('http://localhost:5002/admin')
});

afterEach(async ()=>{
  await customPage.close();
})

describe('admin is logged in and',()=>{
    test('login has been successful and we navigated to the admin page',async ()=> {
     const adminLink = await customPage.getContentsOf('.active');
     await customPage.click('.active');
     const url = await customPage.page.url();
     const heading = await customPage.getContentsOf('.edit-products h2');
     expect(heading).toEqual('Upload product');
    })
})