const { Given, When, Then } = require('cucumber');
const calculatorPage = require('../pages/calculator.js');
const expect = require('chai').expect;
const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build()

When('Hit The AngularIO Page URL', async () => {
    await browser.get('https://angular.io/docs');
});

Given('Open Student Registration URL', {timeout: 2 * 5000},async () => {
    browser.ignoreSynchronization = true;
    driver.manage().window().maximize();
    await driver.get('https://www.jotform.com/212934779973474');
});

When('Input Student First Name {string}', function (keyword) {
    return driver.findElement(webdriver.By.id("input_48")).sendKeys(keyword)
});

When('Input Student Last Name {string}', function (keyword) {
        return driver.findElement(webdriver.By.id("input_49")).sendKeys(keyword)
    });

When('Select Gender {string}', function (keyword) {
    selectElem = driver.findElement(webdriver.By.id("input_3"))
    selectElem.click()
    selectElem.findElement(webdriver.By.css("option[value='Male']")).click()
    });

When('Input Student ID {string}', function (keyword) {
    return driver.findElement(webdriver.By.id("input_14")).sendKeys(keyword)
});

When('Input Mobile Number {string}', function (keyword) {
    return driver.findElement(webdriver.By.id("input_27_full")).sendKeys(keyword)
});

When('Input Student Email {string}', function (keyword) {
    return driver.findElement(webdriver.By.id("input_6")).sendKeys(keyword)
});

When('Click Study Time 8-10 AM', async () => {
    return driver.findElement(webdriver.By.id("label_input_51_0")).click();
});

When('Click Submit Student Registration Form', async () => {
    element = await driver.findElement(By.id("form-pagebreak-next_76"));
    element.click();
    await driver.sleep(3000);
    element.click();
});

Then('Verify Student Registration Submit Successfully', async () => {
    // await driver.findElement(By.id("text_84"))
});

When(/^input lastname "([^"]*)"$/, async function (keyword) {
    return driver.findElement(webdriver.By.id("input_49")).sendKeys(keyword)
});
