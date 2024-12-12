const { test, expect } = require('@playwright/test');

test('Playwright Locator', async ({ page }) => {
  /* await page.goto('https://www.google.com/search?q=cypress+by+tester+talk&oq=cypress+by+tester+talk&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEJMTE5ODNqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8');
   await page.getByRole('link',{name:'Images'}).click();
   await page.waitForTimeout(2000);
 */

  /*await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).fill('api testing by tester talk');
  await page.getByLabel('Search', { exact: true }).press('Enter');
*/

/*await page.goto('https://github.com/BakkappaN');
await page.getByAltText("View BakkappaN's full-sized avatar").click();
await page.waitForTimeout(2000);
  //await page.close();
*/

/*
await page.goto('https://github.com/login');
await page.getByTestId('username').fill('Rahul');
await page.waitForTimeout(2000);
*/
/*
await page.goto('https://www.youtube.com/@testerstalk');
await page.getByText('Cypress by Testers Talk').click();
await page.waitForTimeout(4000);
*/
/*
await page.goto('https://www.youtube.com/@testerstalk');

await page.getByTitle('Cypress by Testers Talk').click();
await page.waitForTimeout(4000);
*/


await page.goto('https://www.youtube.com');
await page.locator("//input[@id='search']").click();
await page.locator("//input[@id='search']").fill('postman testing');
await page.locator("//input[@id='search']").press('Enter');


/*
await page.goto('https://www.youtube.com');
await page.locator("input[id='search']").click();
await page.locator("input[id='search']").fill('postman testing');
await page.locator("input[id='search']").press('Enter');
*/

});