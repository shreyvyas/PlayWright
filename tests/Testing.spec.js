const {test, expect} = require('@playwright/test');

test('First Test Case', async ({page}) => {

    await console.log("this is my first test case");
    
});


test('Get By Text Locator', async ({page}) => {
    
    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    //const button = page.locator("//p[text()='Button']");

    const button = page.getByText("Button");

    await button.click();

    await page.waitForTimeout(2000);

})