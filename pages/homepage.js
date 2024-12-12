const{expect}=require('@playwright/test')

//create class
exports.Homepage=class Homepage{

/**
     * 
     * @param {import ('@playwright/test').Page} page 
     */

constructor(page)
{
    this.page=page;

    this.searchtextbox=page.locator('.gLFyf')


}

async goto()
{
    await this.page.goto('https://www.google.com/')
}

async searchkeywords(param1)
{
  await expect(this.searchtextbox).toBeEnabled();
  await this.searchtextbox.click();
  await this.searchtextbox.fill(param1);
  await this.searchtextbox.press('Enter');

}



}