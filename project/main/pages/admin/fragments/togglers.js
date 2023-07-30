//@ts-check
const {BaseFragment, Button} = require('../../../../../lib')


/**
 * @typedef {object} TogglerCommonAction
* @property {null} [newUser] newUser
* @property {null} [usersList] usersList
 */

 /**
 * @typedef {object} TogglerGetResAction
* @property {string} [newUser] newUser
* @property {string} [usersList] usersList
 */


class TogglersFragment extends BaseFragment{
  constructor(root, name) {
    super(root, name)
    this.newUser = this.init(`button:nth-child(1)`, 'New user', Button)
    this.usersList = this.init(`button:nth-child(2)`, 'Users list', Button)
  }

}
module.exports = {
 TogglersFragment
}

