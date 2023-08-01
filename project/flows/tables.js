// @ts-check
const { expect } = require('assertior');
const { pageProvider } = require('../main/pages/provider');

const { tables } = pageProvider;

/**
 * @param {string} username username
 * @returns {Promise<void>}
 */
async function checkThatUserLoggedInSystem(username) {
  await tables.waitForPageState({ header: { isAdminMarker: true } });
}

async function navigateToAdmin() {
  await tables.click({ header: { toAdmin: null } });
}

module.exports = {
  checkThatUserLoggedInSystem,
  navigateToAdmin,
};
