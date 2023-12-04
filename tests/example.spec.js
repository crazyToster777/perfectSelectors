// @ts-check
const {test, expect} = require('@playwright/test');
test('Fill form', async ({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('[class="col-md-4 col-sm-6"]:nth-of-type(2) input').fill('test')
    await page.locator('html > body > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > form > div:nth-of-type(1) > div:nth-of-type(4) > input').fill('test2');
    await page.locator('input[class="mr-sm-2 form-control"]').fill('test@email.com');
    await page.locator('//div[@class="custom-control custom-radio custom-control-inline"]/*[@id="gender-radio-2"]').check();
    await page.locator('input[maxlength="10"]').fill('1234567');
    await page.waitForTimeout(1000);

});