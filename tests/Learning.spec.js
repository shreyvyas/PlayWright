// @ts-check

import {test, expect} from "@playwright/test";          //import the test and expect functions


test("First Test Case", async ({page}) => {
   
    //navigation
    await page.goto("https://www.easemytrip.com/");

    const searchButton = page.locator(".srchBtnSe");
    await searchButton.waitFor();  //waitFor element to be visible
    await searchButton.click();   //click on element

    const pageTitle = await page.title();   //get the title
    console.log(pageTitle);                 //print the title

    await expect(page).toHaveTitle("EaseMyTrip.com Lowest Airfare, Flight Tickets, Cheap Air Tickets – EaseMyTrip.com"); //assertion

   // await page.pause();    //browser will keep open


});

test("Radio Button Text", async ({page}) => {
   
    await page.goto("https://www.easemytrip.com/");

   let radioButtons  = await page.locator("//label[contains(@class, 'cscshw')]").allTextContents();

   radioButtons = radioButtons.map(label => label.trim()); 

   console.log(radioButtons);

});


test("Click on Radio Button", async ({page}) => {

    await page.goto("https://www.easemytrip.com/");

    const radioButtons = await page.locator("//label[contains(@class, 'cscshw')]").all();

    for(let i=0; i<radioButtons.length; i++){

        let labelText = await radioButtons[i].textContent();

        // @ts-ignore
        labelText = labelText.trim(); 

        if(labelText == "Students"){
            await radioButtons[i].click();
            break;
        }

    }

    //await page.pause();
    
});

test("DropDown Handling", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/Dropdown");

    const dropdown = await page.locator("select.dropdown").nth(0);

    const values = await dropdown.locator("option").allTextContents();

    console.log(values);

    await dropdown.selectOption({value : "Italy"});

    await page.pause();
    
});

test("Print All Checkbox Options", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/Checkbox");

    const checkBox = await page.locator("//div[@class='Checkbox_section1']//p[@class='Checkbox_CheckboxButtonText']").allTextContents();

    console.log(checkBox);    
});

test("Select CheckBox", async ({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/Checkbox");

    await page.locator("//div[@class='Checkbox_section1']//p[contains(text(), 'QA')]/parent::div//input").click();

    await page.pause();
    
});

test("Store Multiple Elements", async ({page}) => {
   
    //search shoes and select specific shoe on QKART site

});