//@ts-check
const {provider} = require('../project')
const {client, I} = provider;
describe('test', () => {
  it('I Register in System', async () => {
    const userData = {username: 'admin', password: 'admin' };
    await client.get('http://localhost:4000')
    await I.loginToSystem(userData);
    await I.checkThatUserLoggedInSystem(userData.username)
    await client.sleep(15000)
})
})
