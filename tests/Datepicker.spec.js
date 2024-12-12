const { test, expect } = require('@playwright/test');

test('DatePicker', async ({ page }) => {
  await page.goto('https://jqueryui.com/datepicker/');

  const iframe= page.frameLocator('.demo-frame');
  //iframe.locator('#datepicker').fill('12/06/2024')

  iframe.locator('#datepicker').click();
  //await iframe.locator('ui-datepicker-today').click();
  
  

  //custom date value

  const defaultdate=iframe.locator('.ui-datepicker-today > a');
  let datevalue= await defaultdate.getAttribute('data-date')
  let customDate = (parseInt(datevalue)+233); // 19 as value

    const element = "[data-date="+"'"+customDate.toString()+"'"+"]";
    
    await iframe.locator(element).click();



  await page.waitForTimeout(5000);
});