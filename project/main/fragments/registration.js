//@ts-check
const {BaseFragment} = require('../../../lib')

class RegistrationFragment extends BaseFragment{
  constructor(root, name) {
    super(root,name)
   this.username = this.root.$(`input[placeholder= "Ім'я користувача"]`)
   this.personalname = this.root.$(`input[placeholder= "Ім'я користувача"]`)
   this.email = this.root.$(`input[placeholder= "Імейл"]`)
   this.email = this.root.$(`input[placeholder= "пароль"]`)
      this.sighUp = this.root.$  ('.btn.btn-primary')
  }
}
module.exports = {
  RegistrationFragment
}
