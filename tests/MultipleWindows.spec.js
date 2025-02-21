import {test, expect} from '@playwright/test';

test.only('Handle Multiple Window', async ({browser}) =>
{

    const context = await browser.newContext();                                         //it creates new session
    const page = await context.newPage();                                               //new page in that session
    await page.goto("https://web-locators-static-site-qa.vercel.app/Windows");
    
    await page.waitForTimeout(2000);   //timeout to stay atleast 2 seconds
    
    const newWindow = page.locator("//p[text()='Launch New Window']");                    //xpath
    //await newWindow.click();                                                            //click on button

    await page.waitForTimeout(2000);

    //now how to move to another window and search some name
    const [newPage] = await Promise.all([

            context.waitForEvent('page'),
            newWindow.click(),

        ])

    console.log(await newPage.title());

    const searchBox = newPage.locator('#APjFqb');
    await searchBox.fill("Shrey");

    await newPage.waitForTimeout(2000);
        


});