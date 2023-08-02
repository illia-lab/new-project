//@ts-check
const { seleniumWD } = require('promod');
const { browser } = seleniumWD;

function stepConsole(stepName, action, ..._args) {
  console.log(stepName);
  return action();
}

async function attachFailedAplicationConditionConsole(_stepName) {
  const screenshot = await browser.takeScreenshot();
  const currentUrl = await browser.getCurrentUrl();
  const localStorage = await browser.executeScript(() => JSON.stringify(localStorage));
  console.log(currentUrl, localStorage);
}

module.exports = {
  stepConsole,
  attachFailedAplicationConditionConsole,
};
