import {Page} from '@playwright/test'

class RegisterPage{
    private readonly page: Page
    private readonly firstName
    private readonly lastName
    private readonly email
    private readonly phone
    private readonly password
    private readonly confirmPassword
    private readonly privacyPolicy
    private readonly continueBtn
    private readonly accountCreatedSuccessTxt
    private readonly accountCreatedContinueBtn

    constructor(page:Page){
        this.page = page
        this.firstName = this.page.locator("#input-firstname")
        this.lastName = this.page.locator("#input-lastname")
        this.email = this.page.locator("#input-email")
        this.phone = this.page.locator("#input-telephone")
        this.password = this.page.locator("#input-password")
        this.confirmPassword = this.page.locator("#input-confirm")
        this.privacyPolicy = this.page.locator("input[name='agree']")
        this.continueBtn = this.page.locator("input[value='Continue']")
        this.accountCreatedSuccessTxt = this.page.locator("h1:text-is('Your Account Has Been Created!')")
        this.accountCreatedContinueBtn = this.page.locator("a:text-is('Continue')")
    }

    public async enterFirstName(firstName:string){
        await this.firstName.fill(firstName)
    }
    public async enterLastName(lastName:string){
        await this.lastName.fill(lastName)
    }
    public async enterEmail(email:string){
        await this.email.fill(email)
    }
    public async enterPhone(phone:string){
        await this.phone.fill(phone)
    }
    public async enterPassword(password:string){
        await this.password.fill(password)
    }
    public async enterConfirmPassword(password:string){
        await this.confirmPassword.fill(password)
    }
    public async clickOnPrivacyPolicy(){
        await this.privacyPolicy.click()
    }
    public async clickOnContinueBtn(){
        await this.continueBtn.click()
    }
    public getAccountCreatedLocator(){
        return this.accountCreatedSuccessTxt
    }
    public async clickOnAccountCreatedContinueBtn(){
        await this.accountCreatedContinueBtn.click()
    }

    public async registerAccount(firstName:string,lastName:string,email:string,phone:string,password:string){
        await this.enterFirstName(firstName)
        await this.enterLastName(lastName)
        await this.enterEmail(email)
        await this.enterPhone(phone)
        await this.enterPassword(password)
        await this.enterConfirmPassword(password)
        await this.clickOnPrivacyPolicy()
        await this.clickOnContinueBtn()
    }
}

export default RegisterPage