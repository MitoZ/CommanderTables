'use strict';
/*
 * controller.js
 * CommanderTables
 * Created by MitoZ in 08.01.17
*/
let dependencies = [
  'authService',
  '$state',
  '$location',
  '$mdDialog'
];
export default class LoginPageController {
  constructor(authService, $state, $location, $mdDialog) {
    let vm = this;
    vm.loginModel = {};
    vm.regModel = {};
    vm.authService = authService;
    vm.$state = $state;
    vm.$location = $location;
    vm.$mdDialog = $mdDialog;
  }
  
  login(provider, credential) {
    this.authService.login(provider, credential).then(()=>{
      if (this.$state.params && this.$state.params.returnUrl) {
        this.$location.url(this.$state.params.returnUrl);
      } else {
        this.$state.go('home.page');
      }
    }, (error)=>{
      this
        .$mdDialog
        .show(
          this.$mdDialog.alert({
            title: 'Login is failed',
            textContent: (error && error.message) ? error.message : 'Unknown login error.',
            ok: 'Close'
          })
        )
        .finally(()=>{
          this.$state.reload();
        });
    });
  }
  register() {
    return this.reg.mail + 'nya';
  }
}
LoginPageController.$inject = dependencies;