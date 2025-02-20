import { test, expect } from '@playwright/test';

test('test case 01', async ({page}) => {

    await page.goto("https://www.google.com/");

    console.log(await page.title());
    //const getTitle = page.title();
    await expect(page).toHaveTitle("Google");

    
})

test('context concept', async ({browser}) =>
{

  const context = await browser.newContext();
  const page = await context.newPage();

});



test('assert a value', async ({ page }) => {
  const value = 1;
  expect(value).toBe(1);

});