const {test, expect} = require('@playwright/test');

test('DropDown Handling', async ({page}) => {
    
    await page.goto("https://web-locators-static-site-qa.vercel.app/Dropdown");

    const dd = page.locator("(//select[@class='dropdown'])[1]");

    await dd.selectOption("Italy");

  
});

