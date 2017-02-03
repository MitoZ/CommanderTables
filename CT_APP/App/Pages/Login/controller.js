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
  '$mdDialog',
  'cudFsLoaderService'
];
export default class LoginPageController {
  constructor(authService, $state, $location, $mdDialog, cudFsLoaderService) {
    let vm = this;
    vm.loginModel = {};
    vm.regModel = {};
    vm.authService = authService;
    vm.$state = $state;
    vm.$location = $location;
    vm.$mdDialog = $mdDialog;
    vm.cudFsLoaderService = cudFsLoaderService;
  }
  
  login(provider, credential) {
    this.cudFsLoaderService.show();
    this.authService.login(provider, credential).then(()=>{
      this.cudFsLoaderService.hide();
      if (this.$state.params && this.$state.params.returnUrl) {
        this.$location.url(this.$state.params.returnUrl);
      } else {
        this.$state.go('home.page');
      }
    }, (error)=>{
      this.cudFsLoaderService.hide();
      this
        .$mdDialog
        .show(
          this.$mdDialog.alert({
            title: 'Login is failed',
            textContent: (error && error.message) ? error.message : 'Unknown login error.',
            ok: 'Close',
            theme: 'red'
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