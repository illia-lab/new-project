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
    await client.sleep(10_000);
    await client.switchToTab({ title: 'Адмінська сторінка' });

    // await I.createNewUserOnAdminPage({
    //   username: 'test2',
    //   personalname: 'test2',
    //   email: 'test2',
    //   password: 'test2',
    // });
    // await I.checkThatUserInUsersList('test2');
    // await client.returnToInitialTab();
  });
});
