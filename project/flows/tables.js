// @ts-check
const {pageProvider} = require('../main/pages/provider')

const {tables} = pageProvider

/**
 * @param {string} username username
 * @returns {Promise<void>}
 */
async function loginToSystem(username) {
 const { header: {greetingMesssage} } =   await tables.get({header: {greetingMessage: null }});
}
module.exports = {
  loginToSystem,
}


