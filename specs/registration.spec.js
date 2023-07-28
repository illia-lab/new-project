//@ts-check
const {provider} = require('../project')

const {client, I} = provider;

describe('Login form', () => {
  it('[P] Success login', async () => {
    const userData = {username: 'admin', password: 'admin' };
    await client.get('http://localhost:4000')
    await I.loginToSystem(userData);
    await I.checkThatUserLoggedInSystem(userData.username)
    await client.sleep(15000)
  })
  it.only('[N] Failed login', async() => {
    const userData = {username: 'admin21321421', password: 'admin21321421' };
    await client.get('http://localhost:4000')
    await I.loginToSystem(userData);
    await I.checkThatAfterFailedLoginFieldsAreFailed(userData)
})
})
