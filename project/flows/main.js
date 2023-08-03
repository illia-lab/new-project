// @ts-check
const { expect } = require('assertior');
const { pageProvider } = require('../main/pages/provider');

function fieldsToNull(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = null;
    return acc;
  }, {});
}

const { main } = pageProvider;

/**
 * @param {object} userData
 * @param {string} [userData.username]
 * @param {string} [userData.password]
 * @returns {Promise<void>}
 */
async function loginToSystem(userData = {}) {
  await main.click({ header: { sighIn: null } });

  await main.sendKeys({ login: userData });

  await main.click({ login: { sighIn: null } });
}

/**
 * @param {object} userData
 * @param {string|number} [userData.username] username
 * @param {string|number} [userData.personalname] personalname
 * @param {string|number} [userData.email] email
 * @param {string|number} [userData.password] password
 * @returns {Promise<void>}
 */
async function registerInSystem(userData = {}) {
  await main.click({ header: { sighUp: null } });
  await main.sendKeys({ register: userData });
  await main.click({ register: { sighUp: null } });
}
/**
 * @param {object} userData
 * @param {string|number|null} [userData.username] username
 * @param {string|number|null} [userData.password] password
 * @returns {Promise<void>}
 */
async function checkThatAfterFailedLoginFieldsAreFailed(userData = {}) {
  const { login } = await main.get({ login: fieldsToNull(userData) });
  Object.keys(userData).forEach(key => {
    expect(userData[key]).toEqual(login[key], `Login form ${key} element should have value ${userData[key]}`);
  });
}

/**
 * @param {object} feedbackData
 * @param {boolean}[feedbackData.open] open
 * @param {string} [feedbackData.username] username
 * @param {string} [feedbackData.content] content
 * @param {boolean} [feedbackData.send] send
 */

async function sendFeedBackToAdmin({ open = true, send, ...messageData }) {
  if (open) await main.click({ footer: { openForm: null } });
  await main.sendKeys({ feedbackForm: messageData });
  if (send) await main.click({ feedbackForm: { send: null } });
}
module.exports = {
  loginToSystem,
  registerInSystem,
  checkThatAfterFailedLoginFieldsAreFailed,
  sendFeedBackToAdmin,
};
