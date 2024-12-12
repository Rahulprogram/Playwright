

//Include Playwright Module
const{test,expect}=require('@playwright/test');
//Write Test
test('Validate Youtube Title',async ({ page }) => {
    // Goto URL
await page.goto('https://www.google.com/search?q=tester+talk&oq=tester+talk');
//Click
//await page.getByRole('link',{name:'Testers Talk'}).first().click();

//await page.waitForTimeout(5000);

//doubleclick
//await page.getByRole('link',{name:'Testers Talk'}).first().dblclick();
//await page.waitForTimeout(5000);
//mouse right click
//await page.getByRole('link',{name:'Testers Talk'}).first().click({button:'right'})
//await page.waitForTimeout(5000);

//mouse middle click

//await page.getByRole('link',{name:'Testers Talk'}).first().click({button:'middle'})
//await page.waitForTimeout(5000);//


// mouse left click
//await page.getByRole('link',{name:'Testers Talk'}).first().click({button:'left'})
//await page.waitForTimeout(5000);//
// mouse hover

await page.locator("[aria-label='Search by voice']").hover();

await page.waitForTimeout(5000);

});