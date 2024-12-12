//Include Playwright Module
const{test,expect}=require('@playwright/test');
const exp = require('constants');
//Write Test
test('Asseration In Playwright',async ({ page }) => {
    // Goto URL
await page.goto('https://www.google.com/search?q=tester+talk');

// Assert URL

await expect.soft(page).toHaveURL('https://www123.google.com/search?q=tester+talk');

// Soft Assert URL

//await expect(page).toHaveURL('https://www.google.com/search?q=tester+talk');


//Assert Title

await expect(page).toHaveTitle('tester talk - Google Search');

//Assert Text

await expect(page.locator('[aria-label="Search"]').first()).toHaveText('tester talk');

//Assert Editable enabled visible

await expect(page.locator('[aria-label="Search"]').first()).toBeEditable();
await expect(page.locator('[aria-label="Search"]').first()).toBeVisible();
await expect(page.locator('[aria-label="Search"]').first()).toBeEnabled();

    //assert disabled empty count
    //await expect(page.locator("[aria-label='Search']").first()).toBeDisabled();

    await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty();

    await expect(page.locator("[aria-label='Search']")).toHaveCount(2)

await page.waitForTimeout(5000)

await page.close();
});