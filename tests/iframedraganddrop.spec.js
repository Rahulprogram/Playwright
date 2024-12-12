// @ts-check
const { test, expect } = require('@playwright/test');

test('Iframe Drag n Drop', async ({ page }) => {
  await page.goto('https://jqueryui.com/droppable/')
  const iframeElement = page.frameLocator('.demo-frame') 
  // src and dest element
  const dragElement = iframeElement.locator("[id='draggable']");
  const dropElement = iframeElement.locator("[id='droppable']");

  await dragElement.dragTo(dropElement);
  await page.waitForTimeout(5000);
  
});

