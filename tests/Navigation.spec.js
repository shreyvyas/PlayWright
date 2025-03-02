import { test, expect } from "@playwright/test";

test('Navigation Commands', async ({page}) =>

{

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    const button = page.locator("//p[text()='Button']");
    await button.click();

    await page.waitForTimeout(2000);

    const clickButton = page.locator(".buttonContent");
    await clickButton.click();

    await page.waitForTimeout(2000);

    await page.goBack();

    await page.waitForTimeout(2000);

    await page.goBack();

    await page.waitForTimeout(2000);

    await page.goForward();

}

);


