import { test, expect  } from "@playwright/test";

test('Hyperlinks', async ({page}) =>

{
    await page.goto("https://web-locators-static-site-qa.vercel.app/Hyperlink");

    //first check is link is enabled
    //is displayed

    const crioLink = page.locator("//a[@href='https://www.crio.do/']");

    // console.log(crioLink.isVisible());      await is required else it will return Promise Object
    // console.log(crioLink.isEnabled());

    console.log(await crioLink.isEnabled());
    console.log(await crioLink.isVisible());

    //check total links on page
    const links = page.locator("a");
    const linkCount = await links.count();
    console.log(linkCount);

    //print all the links
    // for(let i=0; i<linkCount; i++){
    //     const linkText = links.textContent();         //wrong for loop
    //     console.log(linkText);
    // }

    //single line is enough
    const linkText = await links.allTextContents();
    console.log(linkText);

}



);