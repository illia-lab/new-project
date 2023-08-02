// @ts-check
const { expect } = require('assertior');
const { pageProvider } = require('../main/pages/provider');

const { tables } = pageProvider;

async function navigateToAdmin() {
  await tables.click({ header: { toAdmin: null } });
}

module.exports = {
  navigateToAdmin,
};
