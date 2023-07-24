//@ts-check
const {BasePaje} = require('../../../lib')

const{HeaderFragment} = require('../fragments/header')
const{LoginFragment} = require('../fragments/login')
const{RegistrationFragment} = require('../fragments/registration')
class MainPaje extends BasePaje{
  constructor() {
    super('#main_paje', 'Main paje')
    this.header = this.init('.main_header', 'Header', HeaderFragment)
    this.login = this.init('.login_form', 'Header', LoginFragment)
    this.header = this.init('.registration_form', 'Header', RegistrationFragment)
  }
}
module.exports = {
  MainPaje
}