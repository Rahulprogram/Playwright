// Include playwright module
const {test, expect} = require('@playwright/test');
const { Homepage } = require('../pages/homepage');
const { Resultpage } = require('../pages/resultpage');
const { PlaylistPage } = require('../pages/playlistpage');

// Write a test
test('Page Object Model in playwright', async({page}) =>{
    // Go to URL
    const homepage = new Homepage(page);
    await homepage.goto();
   
    // Search with keywords
    homepage.searchkeywords('playwright by testers talk');

    // Click on playlist
    const resultpage = new Resultpage(page);
    resultpage.clickOnPlaylist();

    await page.waitForTimeout(4000)

    // Click on video
    const playlistpage = new PlaylistPage(page);
    playlistpage.clickOnVideo();

    await page.waitForTimeout(8000)

})