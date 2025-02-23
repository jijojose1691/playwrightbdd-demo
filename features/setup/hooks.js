import { createBdd } from 'playwright-bdd';

const { Before} = createBdd();
const { env } = process;
const logger = require('../support/logger');

const playwright = require('@playwright/test');
Before(async function ({ page }, scenario) {
    logger.info(
        `The scenario is starting`
    )
    let options = { headless: false }
    switch (env.BROWSER) {
        case 'chrome':
            this.browser = await playwright.chromium.launch(options);
            break;
        case 'firefox':
            this.browser = await playwright.firefox.launch(options);
            break;
        case 'webkit':
            this.browser = await playwright.webkit.launch(options);
            break;
        default:
            this.browser = await playwright.chromium.launch(options);
            break;
    }
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    this.logger = logger
});