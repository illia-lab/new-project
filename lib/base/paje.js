

//@ts-check
const {seleniumWD} = require('promod');
const {$} = seleniumWD;
class BasePaje{
  /**
   * @param {string} selector paje root selector
   * @param {string} name paje name
   */
    constructor(selector, name) {
      this.selector = selector;
      this.name = name;
      this.root = $(this.selector)
    }
  /**
   *
   * @param {string} selector css/xpath/js selector
   * @param {string} name child name
   * @param {new (...args: any[]) => any} child child element constructor
   * @param  {...any[]} rest rest required arguments
   * @returns
   */



  init(selector, name, child, ...rest) {
return new child(this.root.$(selector,name, ...rest))
}
  }
  module.exports = {
    BasePaje
  }
