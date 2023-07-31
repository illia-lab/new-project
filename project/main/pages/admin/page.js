//@ts-check
const { BasePage } = require('../../../../lib');
const { TogglersFragment } = require('./fragments/togglers');
const { UserFormFragment } = require('./fragments/new.user');
const { UsersListFragment } = require('./fragments/users.list');

/**
 *
 * @typedef {import ('./fragments/new.user').UserFormCommonAction} UserFormCommonAction
 * @typedef {import ('./fragments/new.user').UserFormSendKeysAction} UserFormSendKeysAction
 * @typedef {import ('./fragments/new.user').UserFormGetResAction} UserFormGetResAction
 *
 * @typedef {import ('./fragments/togglers').TogglerCommonAction} TogglerCommonAction
 * @typedef {import ('./fragments/togglers').TogglerGetResAction} TogglerGetResAction
 *
 * @typedef {import ('./fragments/users.list').UserListCommonAction} UserListCommonAction
 * @typedef {import ('./fragments/users.list').UserListGetResAction} UserListGetResAction
 *
 *
 */

/**
 * @typedef {object} AdminPageInteractionInterface
 * @property {(data:{
 *  userForm?: UserFormSendKeysAction;
 * }) => Promise<void>} sendKeys sendKeys method
 * @property {(data:{
 * togglers?: TogglerCommonAction;
 *  userForm?: UserFormCommonAction;
 * }) => Promise<void>} click click metho
 * @property {(data:{
 * togglers?: TogglerCommonAction;
 * userForm?: UserFormCommonAction;
 * usersList?: UserListCommonAction;
 * }) => Promise<{
 * togglers?: TogglerGetResAction;
 * userForm?: UserFormGetResAction;
 * usersList?: UserListGetResAction;
 * }>} get get method
 */

class AdminPage extends BasePage {
  constructor() {
    super('#admin_page', 'Admin page');
    this.togglers = this.init('.view_toggler', 'Toggler buttons', TogglersFragment);
    this.userForm = this.init('.admin_new_user', 'New user creation form', UserFormFragment);
    this.usersList = this.init('.admin_user_list_root', 'Users list', UsersListFragment);
  }
}
/**
 *
 * @returns {AdminPageInteractionInterface}  interaction interface
 */
function getAdmin() {
  return new AdminPage();
}

module.exports = {
  getAdmin,
};
