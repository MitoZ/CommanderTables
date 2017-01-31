'use strict';
/*
 * controller.js
 * CommanderTables
 * Created by MitoZ in 08.01.17
*/
let dependencies = [
  'authService'
];
export default class LoginPageController {
  constructor(authService) {
    let vm = this;
    vm.loginModel = {};
    vm.regModel = {};
    vm.authService = authService;
  }
  
  login(provider, credential) {
    this.authService.login(provider, credential);
  }
  register() {
    return this.reg.mail + 'nya';
  }
}
LoginPageController.$inject = ['authService'];