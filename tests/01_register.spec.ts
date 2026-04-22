import { test, expect } from '@playwright/test'
import HomePage from '../pages/homePage';
import RegisterPage from '../pages/RegisterPage'
import TestConfig from '../test.config';
import DataProvider from '../utils/DataProvider';

test("validate the user is able to register", async ({ page }) => {
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    await page.goto(TestConfig.baseUrl)
    await homePage.clickOnMyAccountBtn()
    await homePage.clickOnRegisterBtn()
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/register")
    await registerPage.registerAccount(TestConfig.firstName, TestConfig.lastName, TestConfig.email, TestConfig.phone, TestConfig.password)
    await expect(registerPage.getAccountCreatedLocator()).toHaveText("Your Account Has Been Created!")
    const dataProvider = new DataProvider()
    dataProvider.writeToCSV('loginTestData',`${TestConfig.email},${TestConfig.password}\n`)
})