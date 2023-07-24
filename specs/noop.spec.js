const {seleniumWD} = require('promod');
const {$, $$, browser} = seleniumWD;

describe('test', () => {
  const username = $(`input[placeholder="Ім'я користувача"]`)
  const password = $(`xpath=//input[@placeholder="пароль"]`)
  const sighIn = $$('.btn.btn-primary').get(0)
  it('test it', async() => {
    await browser.get('http://localhost:4000')
    await username.sendKeys('admin');
    await password.sendKeys('admin');
    await sighIn.click();
    await browser.sleep(15000)

})
})
