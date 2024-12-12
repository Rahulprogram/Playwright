//Include Playwright Module
const{test,expect}=require('@playwright/test');
//Write Test
test('Validate Youtube Title',async ({ page }) => {
    // Goto URL
await page.goto('https://www.youtube.com/');
await page.getByPlaceholder('Search').click();
await page.getByPlaceholder('Search').fill('Cypress By Tester Talk');
await page.getByRole('button', { name: 'Search', exact: true }).click();
await page.waitForTimeout(2000);
await page.getByRole('link', { name: 'Cypress by Testers Talk Testers Talk · Playlist' }).click();
await expect(page).toHaveTitle('Cypress Tutorial Full Course 2023 | Learn Cypress in 5 Hrs - YouTube');




});









