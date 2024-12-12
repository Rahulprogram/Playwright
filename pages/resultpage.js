const{expect}=require('@playwright/test')

//create class
exports.Resultpage=class Resultpage{

/**
     * 
     * @param {import ('@playwright/test').Page} page 
     */

constructor(page)
{
    this.page=page;

    this.playlistlink = page.getByRole('link',{name:'Playwright by Testers Talk'});


}

async clickOnPlaylist(){
    await expect(this.playlistlink.first()).toBeEnabled();
    await this.playlistlink.first().click();


}
}
