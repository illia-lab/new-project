const { seleniumWD } = require('promod');

before(async function () {
  /**
   * onPrepare - protractor part
   * rest - other config data
   */
  const { getDriver, browser } = seleniumWD;

  await getDriver(browser);

  // i am not a big fan of global object usage, but if it is suitable for you, just add API to global
  global.browser = browser;
});

after(async function () {
  await global.browser.quit();
});
