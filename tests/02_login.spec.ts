import {test,expect} from '@playwright/test'
import TestConfig from '../test.config'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'


test("validate the user login",async ({page})=>{
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)
    await page.goto(TestConfig.baseUrl)
    await homePage.clickOnMyAccountBtn()
    await homePage.clickOnLoginBtn()
    await loginPage.userLogin(TestConfig.email,TestConfig.password)
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/account")
})