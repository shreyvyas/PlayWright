// @ts-check

const {test, expect} = require('@playwright/test');

//search product from qkart homepage
test('Search Product', async ({page}) => {
    
    await page.goto("https://crio-qkart-frontend-qa.vercel.app/");

    const searchBox = page.getByPlaceholder("Search for items/categories").first();
    //const searchBox = page.locator(".css-11zsshc");
    await searchBox.fill("Shoes");
    await page.waitForTimeout(2000);

    const shoes = await page.locator('p.MuiTypography-body1').allTextContents();
    console.log(shoes);

});

test('have title', async ({page}) => {
    
    await page.goto("https://crio-qkart-frontend-qa.vercel.app/");

    const title = await page.title();
    console.log(title);

    await expect(page).toHaveTitle("QKart");          //assertions to check title

});


