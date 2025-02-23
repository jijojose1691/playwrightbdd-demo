import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();
const { POManager } = require('../pageObjects/POManager');
const portalConfig = require('../config/portal.config');

Given('I am on the login screen', async function ({ page }) {
    let poManager = new POManager(this.page)
    this.loginPage = poManager.getLoginPage();
    await this.loginPage.navigateToLoginScreen();
    await this.loginPage.verifyLoginPageIsDisplayed();
});

Then('I should be able to see the home screen', async function ({ page }) {
    let poManager = new POManager(this.page)
    this.loginPage = poManager.getLoginPage();
    await this.loginPage.verifyAfterLoginPage();
});

Then('I should see error {string}', async function ({ page }, errorMsg) {
    let poManager = new POManager(this.page)
    this.loginPage = poManager.getLoginPage();
    await this.loginPage.verifyErrorMsg(errorMsg);
});

Given('I fill the login form with {string} and {string}', async function ({ page }, username, password) {
    let poManager = new POManager(this.page)
    this.loginPage = poManager.getLoginPage();
    await this.loginPage.submitCredentials(username, password);
});

Given('I fill the login form with valid username {string}', async function ({ page }, username) {
    let poManager = new POManager(this.page)
    this.loginPage = poManager.getLoginPage();
    await this.loginPage.submitCredentials(username, portalConfig.PASSWORD);
});

Then('Verify error message {string} is shown', async function ({ page }, errorMsg) {
    let poManager = new POManager(this.page)
    this.loginPage = poManager.getLoginPage();
    await this.loginPage.verifyErrorMsg(errorMsg);
});
