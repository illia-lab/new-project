//@ts-check
const { ContentType } = require('allure-js-commons');
const { seleniumWD } = require('promod');
const { browser } = seleniumWD;

function stepAllure(stepName, action, ...args) {
  const { allure } = require('allure-mocha/runtime');
  return allure.step(stepName, async () => {
    if (args.length) {
      const toLog = args.length === 1 ? args[0] : args;
      allure.attachment(`${stepName} entry args`, JSON.stringify(toLog, null, '/t'), ContentType.JSON);
    }
    const result = await action();
    if (result) {
      allure.attachment(`${stepName} execution result`, JSON.stringify(result, null, '/t'), ContentType.JSON);
    }
    return result;
  });
}

function attachFailedAplicationCondition(stepName) {
  const { allure } = require('allure-mocha/runtime');
  return allure.step(stepName, async () => {
    const screenshot = await browser.takeScreenshot();
    const currentUrl = await browser.getCurrentUrl();
    const localStorage = await browser.executeScript(() => localStorage);
    allure.attachment('URL', currentUrl, ContentType.TEXT);
    allure.attachment('LOCALSTORAGE', localStorage, ContentType.JSON);
    allure.attachment('FAILED VIEW', screenshot, ContentType.PNG);
  });
}

module.exports = {
  stepAllure,
  attachFailedAplicationCondition,
};
