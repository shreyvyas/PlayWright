//@ts-check

import {test, expect} from '@playwright/test';

test.describe('Group', () => {
 
    test.beforeEach(async ({page}) => {
        await page.goto("https://playwright.dev/docs/api/class-test");
    })

    test('test001', async ({page}) => {
        await expect(page).toHaveURL("https://playwright.dev/docs/api/class-test");
    })

    test('test002', async ({page}) => {

        await expect(page).toHaveTitle("Playwright Test | Playwright");
        
    })


});