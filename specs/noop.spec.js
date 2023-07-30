//@ts-check
const { provider } = require('../project');

const { client, I } = provider;

describe('Login form', () => {
  const adminData = { username: 'admin', password: 'admin' };

  it('[P] Success login', async () => {
    await client.get('http://localhost:4000');
    await I.loginToSystem(adminData);
    await I.checkThatUserLoggedInSystem(adminData.username);
    await client.sleep(15000);
  });

  it('[N] Failed login', async () => {
    const userData = { username: 'admin21321421', password: 'admin21321421' };
    await client.get('http://localhost:4000');
    await I.loginToSystem(userData);
    await I.checkThatAfterFailedLoginFieldsAreFailed(userData);
  });

  it.only('[P] Admin creates new user', async () => {
    await client.get('http://localhost:4000');
    await I.loginToSystem(adminData);
    await I.navigateToAdmin();
    await client.sleep(15000);
  });
});
