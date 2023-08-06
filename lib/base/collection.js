//@ts-check
const { isNumber } = require('sat-utils');

class Collection {
  /**
   * @param {import('promod/built/interface').PromodElementsType} rootEls collection root elements
   * @param {string} name child name
   * @param {new (...args: any[]) => any}  childItem child item
   */
  constructor(rootEls, name, childItem) {
    this.rootEls = rootEls;
    this.name = name;
    this.childItem = childItem;
  }

  /**
   *
   * @param {object} data
   * @param {number} [data.index] index
   * @param {any} [data.action] index
   * @returns
   */

  async click({ index, action, ...rest } = {}) {
    if (isNumber(index)) {
      return new this.childItem(this.rootEls.get(index), `${this.name} ${index}`).click(action);
    } else if (Object.keys(rest).length) {
      return (await this.findChild(rest)).click(action);
    }
  }
  /**
   * @private
   */
  async findChild(itemDescriptor) {
    const elementsCount = await this.rootEls.count();
    for (let i = 0; i < elementsCount; i++) {
      const childInstance = await new this.childItem(this.rootEls.get(i), `${this.name} ${i}`);
      if (await childInstance.isRequiredItem(itemDescriptor)) {
        return childInstance;
      }
    }
    throw new Error(`Child was not found, check you descriptor ${JSON.stringify(itemDescriptor)}`);
  }
}

module.exports = {
  Collection,
};
