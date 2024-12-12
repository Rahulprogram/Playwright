const { test, expect } = require('@playwright/test');

test('Screenshot In Playwright', async ({ page }) => {

// Element Screenshot
await page.goto('https://www.youtube.com/@testerstalk');
await page.locator('#channel-header-container').screenshot({path:'./Screenshot/element.png'});
// Page Screenshot

await page.screenshot({path:'./Screenshot/page.png'});

// Full page Screenshot

await page.screenshot({path:'./Screenshot/fullpage.png',fullPage:true});

await page.waitForTimeout(8000);

await page.close();



});