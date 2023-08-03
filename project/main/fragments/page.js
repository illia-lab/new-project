//@ts-check
const { BasePage } = require('../../../lib');
const { HeaderFragment } = require('../fragments/header');
const { LoginFragment } = require('../fragments/login');
const { RegistrationFragment } = require('../fragments/registration');
const { FooterFragment } = require('./footer');
const { MessageFormFragment } = require('../pages/shared_fragments/message.form');

/**
 * @typedef {import ('../fragments/registration').RegistrationCommonAction} RegistrationCommonAction
 * @typedef {import ('../fragments/registration').RegistrationSendKeysAction} RegistrationSendKeysAction
 *
 * @typedef {import ('../fragments/login').LoginSendKeysAction} LoginSendKeysAction
 * @typedef {import ('../fragments/login').LoginCommonAction} LoginCommonAction
 * @typedef {import ('../fragments/login').LoginGetResAction} LoginGetResAction
 *
 * @typedef {import ('../pages/shared_fragments/message.form').MessageFormCommonAction} MessageFormCommonAction
 * @typedef {import ('../pages/shared_fragments/message.form').MessageFormGetResAction} MessageFormGetResAction
 * @typedef {import ('../pages/shared_fragments/message.form').MessageFormSendKeys} MessageFormSendKeys
 * @typedef {import ('../fragments/header').HeaderCommonAction} HeaderCommonAction
 * @typedef {import ('../fragments/footer').FooterCommonAction} FooterCommonAction
 *
 */

/**
 * @typedef {object} MainPageInteractionInterface
 * @property {(data:{
 * login?: LoginSendKeysAction
 * register?: RegistrationSendKeysAction
 * feedbackForm?: MessageFormSendKeys
 * }) => Promise<void>} sendKeys sendKeys method
 * @property {(data:{
 * login?: LoginCommonAction
 * register?: RegistrationCommonAction
 * header?: HeaderCommonAction
 * footer?: FooterCommonAction
 * feedbackForm?: MessageFormCommonAction
 * }) => Promise<void>} click click method
 * @property {(data:{
 * login?: LoginCommonAction
 * register?: RegistrationCommonAction
 * header?: HeaderCommonAction
 *  feedbackForm?: MessageFormCommonAction
 * }) => Promise<{
 * login?: LoginCommonAction
 * feedbackForm?: MessageFormGetResAction
 * }>} get get method
 */

class MainPage extends BasePage {
  constructor() {
    super('#main_page', 'Main page');
    this.header = this.init('.main_header', 'Header', HeaderFragment);
    this.login = this.init('.login_form', 'Header', LoginFragment);
    this.register = this.init('.registration_form', 'Header', RegistrationFragment);
    this.footer = this.init('xpath=//*[@id="main_page]/div[last()]', 'Footer', FooterFragment);
    this.feedbackForm = this.init('.message_modal', 'Feedback Form', MessageFormFragment);
  }
}
/**
 * @returns {MainPageInteractionInterface}  interaction interface
 */
function getMain() {
  return new MainPage();
}

module.exports = {
  MainPage,
  getMain,
};
