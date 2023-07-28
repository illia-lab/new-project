//@ts-check
const {BaseFragment, Button} = require('../../../lib')

/**
 * @typedef {object} HeaderCommonAction
* @property {null} [sighIn] sighIn
* @property {null} [sighUp] sighUp
 */


class HeaderFragment extends BaseFragment{
  constructor(root, name) {
    super(root, name)
    this.sighIn = this.init('button:nth-child(1)','Sigh In button', Button)
    this.sighUp = this.init('button:nth-child(2)','Sigh Up button', Button)
  }
}
module.exports = {
  HeaderFragment
}
