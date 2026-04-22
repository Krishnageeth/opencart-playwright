import {Page,Locator} from '@playwright/test'

class HomePage{
    private readonly page:Page
    private readonly myAccountBtn:Locator
    private readonly registerBtn:Locator
    private readonly loginBtn:Locator
    constructor(page:Page){
        this.page = page
        this.myAccountBtn = this.page.locator("span:text-is('My Account')")
        this.registerBtn = this.page.locator("a:text-is('Register')")
        this.loginBtn = this.page.locator("a:text-is('Login')")
    }

    public async clickOnMyAccountBtn(){
        await this.myAccountBtn.click()
    }

    public async clickOnRegisterBtn(){
        await this.registerBtn.click()
    }

    public async clickOnLoginBtn(){
        await this.loginBtn.click()
    }
    
}
export default HomePage