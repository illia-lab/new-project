// @ts-check
const { expect } = require('assertior');
const { pageProvider } = require('../main/pages/provider');

const { admin } = pageProvider;

/**
 * @param {string} username username
 * @returns {Promise<void>}
 */
async function createNewUserOnAdminPage(username) {}

async function navigateToAdmin() {}

module.exports = {
  checkThatUserLoggedInSystem,
  createNewUserOnAdminPage,
};
