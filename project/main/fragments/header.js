//@ts-check
const {BaseFragment} = require('../../../lib')


class HeaderFragment extends BaseFragment{
  constructor(root, name) {
    super(root, name)
    this.sighIn = this.root.$('button:nth-child(1)')
    this.sighUp = this.root.$('button:nth-child(2)')
  }
}
module.exports = {
  HeaderFragment
}
