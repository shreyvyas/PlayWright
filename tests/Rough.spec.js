//first thing is to import test and expect functions from PlayWright
import {test, expect} from '@playwright/test';

//test: it defines test functions
//expect: for assertions

test.only('basic test', async ({ page }) =>{                                      //page is fixture 

    await page.goto("https://web-locators-static-site-qa.vercel.app/");
    
    const editButton = page.locator("//*[text()='Edit']");
    await editButton.click();
    await page.waitForTimeout(2000);

    const enterName = page.locator("[placeholder='Click here to enter your name here']");
    await enterName.fill("Shrey Vyas");
    await page.waitForTimeout(2000);

    const appendValue = page.locator("//input[@placeholder='White']");
    await appendValue.fill("Walter");
    await page.waitForTimeout(2000);




});

 

test('async-await concept', ()=>{

    console.log("start test");
    console.log("first test");
    console.log("second test");
    console.log("end test");

});