//@ts-check
const {BaseFragment} = require('../../../lib')
class LoginFragment extends BaseFragment{
  constructor(root, name) {
    super(root, name)
 this.username = this.root.$(`input[placeholder= "Ім'я користувача"]`)
  this.password = this.root.$(`xpath=//input[@placeholder="пароль"]`)
  this.sighIn = this.root.$('.btn.btn-primary')
  }
}
module.exports = {
  LoginFragment
}

