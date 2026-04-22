import {Page} from '@playwright/test'

class LoginPage{
    private readonly page
    private readonly email
    private readonly password
    private readonly loginBtn
    private readonly invalidLoginTxt
    constructor(page:Page){
        this.page = page
        this.email = this.page.locator("#input-email")
        this.password = this.page.locator("#input-password")
        this.loginBtn = this.page.locator("input[value='Login']")
        this.invalidLoginTxt = this.page.locator("div:text-is('Warning: No match for E-Mail Address and/or Password.')")
    }

    public async enterEmail(email:string){
        await this.email.fill(email)
    }
    
    public async enterPassword(password:string){
        await this.password.fill(password)
    }

    public async clickOnLoginBtn(){
        await this.loginBtn.click()
    }

    public async userLogin(email:string,password:string){
        await this.enterEmail(email)
        await this.enterPassword(password)
        await this.clickOnLoginBtn()
    }
}
export default LoginPage