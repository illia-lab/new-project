//@ts-check
const {BaseFragment, Button} = require('../../../../../lib')


/**
 * @typedef {object} UserItemCommonAction
* @property {null} [newUser] username
* @property {null} [usersList] details
 */

 /**
 * @typedef {object}UserItemGetResAction
* @property {string} [username] username
* @property {string} [details] details
 */


class UserItemFragment extends BaseFragment{
  constructor(root, name) {
    super(root, name)
    this. username = this.init(`.user_item_username`, 'New user', Button)
    this.details = this.init(`button`, 'Users list', Button)
  }

}
module.exports = {
  UserItemFragment
}

