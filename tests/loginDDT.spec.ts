import { test, expect } from '@playwright/test'
import TestConfig from '../test.config'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DataProvider from '../utils/DataProvider'

test.describe('Login data driven test', { tag: '@regression' }, () => {
    const dataProvider = new DataProvider()
    const data = dataProvider.readCSV('testData/loginTestData.csv')
    for (let item of data) {
        test(`validate the user login ${item.email}`, async ({ page }) => {
            const homePage = new HomePage(page)
            const loginPage = new LoginPage(page)
            await page.goto(TestConfig.baseUrl)
            await homePage.clickOnMyAccountBtn()
            await homePage.clickOnLoginBtn()
            await loginPage.userLogin(item.email,item.password)
            await expect(page).toHaveTitle("My Account")
            await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/account")
        })
    }
})