const { seleniumWD } = require('promod');

before(async function () {
  /**
   * onPrepare - protractor part
   * rest - other config data
   */
  const { getDriver, browser } = seleniumWD;

  await getDriver(browser);

  global.browser = browser;
});

after(async function () {
  await global.browser.quitAll();
});
