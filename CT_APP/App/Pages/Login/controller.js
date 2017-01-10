'use strict';
/*
 * controller.js
 * CommanderTables
 * Created by MitoZ in 08.01.17
*/
let dependencies = [
  '$http'
];
export default class LoginPageController {
  constructor($http) {
    let vm = this;
    vm.loginModel = {};
    vm.regModel = {};
    vm.http = $http;
    // vm.login = function () {
    //   console.log('fake'); //TODO: Delete this before checkIN
    // };
    console.log(this); //TODO: Delete this before checkIN
  }
  
  login() {
    return this.http;
  }
  register() {
    return this.reg.mail + 'nya';
  }
}
LoginPageController.$inject = ['$http'];