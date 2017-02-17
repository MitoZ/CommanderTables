'use strict';
/**
 * Created by dzmitry.barkouski on 10.01.2017.
 */

import angular from 'angular';
let dependencies = [
  'authService',
  '$state',
  // '$location',
  '$mdDialog',
  'cudFsLoaderService',
  '$scope'
];
export default class LoginRecoverController{
  constructor(authService, $state, $mdDialog, cudFsLoaderService, $scope) {
    let vm = this;
    vm.recModel = {};
    vm.authService = authService;
    vm.$state = $state;
    vm.$mdDialog = $mdDialog;
    vm.cudFsLoaderService = cudFsLoaderService;
    vm._$scope = $scope;
  }
  
  recoveryAccount(mail) {
    let form = this._$scope.recoveryForm,
      errors = angular.extend({}, form.recoveryAccMail.$error);
    if (Object.keys(errors).length || !(mail && mail.length)) {
      this.throwError('Validation failed.');
    } else {
      this.cudFsLoaderService.show();
      this.authService.resetPass(mail).then(
        (data)=>{
          console.info('Recovery pass - ', data);
          this.cudFsLoaderService.hide();
          this
            .$mdDialog
            .show(
              this.$mdDialog.alert({
                title: 'Recovery is done.',
                textContent: 'The Email with instruction was send.',
                ok: 'Close'
              })
            )
            .finally(()=>{
              this.$state.go('login.page');
            });
        },
        (error)=>{
          this.cudFsLoaderService.hide();
          this.throwError((error && error.message) ? error.message : 'Unknown recovery error.');
        });
    }
  }
  
  throwError(error) {
    this
      .$mdDialog
      .show(
        this.$mdDialog.alert({
          title: 'Recovery failed',
          textContent: error,
          ok: 'Close',
          theme: 'errors'
        })
      );
    console.warn('some error - ', error); //TODO: Delete this before checkIN
  }
}
LoginRecoverController.$inject = dependencies;