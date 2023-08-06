//@ts-check
const { waitForCondition } = require('sat-utils');
const { decorateBase } = require('../reporter/');
class BaseElement {
  /**
   * @param {import('promod/built/interface').PromodElementType} root fragment root
   * @param {string} name fragment name
   */
  constructor(root, name) {
    this.root = root;
    this.name = name;
  }

  async sendKeys(data) {
    await this.root.sendKeys(data);
  }

  async click() {
    await waitForCondition(() => this.root.isDisplayed(), {
      timeout: 15_000,
      message: `${this.name} should be visible`,
    });
    await this.root.click();
  }

  async get(data) {
    return (await this.root.getText()).trim();
  }

  async isDisplayed(data) {
    return this.root.isDisplayed();
  }

  async isRequiredItem({ _element }) {
    const thisContent = await this.get();
    return thisContent.includes(_element);
  }
}

decorateBase(BaseElement, 'get', name => `${name} execute get`);
decorateBase(BaseElement, 'click', name => `${name} execute click`);
decorateBase(BaseElement, 'sendKeys', name => `${name} execute sendKeys`);
decorateBase(BaseElement, 'isDisplayed', name => `${name} execute isDisplayed`);

module.exports = {
  BaseElement,
};
