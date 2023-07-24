//@ts-check
class BaseFragment{
/**
 * @param {import('promod/built/interface').PromodElementType} root fragment root
 * @param {string} name fragment name
 */
  constructor(root, name) {
    this.root = root;
    this.name = name;
  }
}
module.exports = {
  BaseFragment
}
