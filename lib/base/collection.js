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
   * @param {object} data data
   * @param {number} [data.index] index
   * @param {any} [data.action] index
   * @returns
   */
  async get({ index, action, ...rest } = {}) {
    if (isNumber(index)) {
      return [new this.childItem(this.rootEls.get(index), `${this.name} ${index}`).get(action)];
    } else if (Object.keys(rest).length) {
      return [await (await this.findChild(rest)).click(action)];
    } else {
      const results = [];
      await this.rootEls.each(async childElementRoot => {
        const childInstanse = new this.childItem(childElementRoot, this.name);
        results.push(await childInstanse.get(action));
      });
      return results;
    }
  }

  /**
   *
   * @param {object} data data
   * @param {number} [data.index] index
   * @param {any} [data.action] index
   * @returns
   */

  async click({ index, action, ...rest } = {}) {
    if (isNumber(index)) {
      return new this.childItem(this.rootEls.get(index), `${this.name} ${index}`).click(action);
    } else if (Object.keys(rest).length) {
      return await (await this.findChild(rest)).click(action);
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
