'use strict';
/*
 * controller.js
 * CommanderTables
 * Created by MitoZ in 08.01.17
*/
import angular from 'angular';
let dependencies = [
  'authService',
  '$state',
  '$location',
  '$mdDialog',
  'cudFsLoaderService',
  '$scope'
];
export default class LoginPageController {
  constructor(authService, $state, $location, $mdDialog, cudFsLoaderService, $scope) {
    let vm = this;
    vm.loginModel = {};
    vm.regModel = {};
    vm.authService = authService;
    vm.$state = $state;
    vm.$location = $location;
    vm.$mdDialog = $mdDialog;
    vm.cudFsLoaderService = cudFsLoaderService;
    vm._$scope = $scope;
  }
  
  login(provider, credential) {
    this.cudFsLoaderService.show();
    this.authService.login(provider, credential).then(
      ()=>{
        this.doneRedirect();
      },
      (error)=>{
        this.cudFsLoaderService.hide();
        this.throwError((error && error.message) ? error.message : 'Unknown login error.');
      });
  }
  
  register(credential) {
    let form = this._$scope.regForm,
      errors = angular.extend({}, form.regPass.$error, form.confPass.$error, form.regMail.$error);
    if (Object.keys(errors).length || !(credential && credential.mail && credential.pass)) {
      this.throwError('Validation failed.');
    } else {
      this.cudFsLoaderService.show();
      this.authService.signIn(credential).then(
        (user_data, ...etc)=>{
          console.info('user created - ', user_data);
          console.log('etc - ', etc); //TODO: Delete this before checkIN
          user_data.sendEmailVerification().then(
            ()=>{
              this
                .$mdDialog
                .show(
                  this.$mdDialog.alert({
                    title: 'Register is done.',
                    textContent: 'Verification email is sent to your email.',
                    ok: 'Close'
                  })
                )
                .finally(()=>{
                  this.doneRedirect();
                });
            },
            (error)=>{
              this.throwError((error && error.message) ? error.message : 'Sending verification message error.');
            }
          );
          this.cudFsLoaderService.hide();
        },
        (error)=>{
          this.cudFsLoaderService.hide();
          this.throwError((error && error.message) ? error.message : 'Unknown register error.');
          console.warn('user creation error - ', error); //TODO: Delete this before checkIN
        });
    }
  }
  
  throwError(error) {
    this
      .$mdDialog
      .show(
        this.$mdDialog.alert({
          title: 'Register failed',
          textContent: error,
          ok: 'Close',
          theme: 'errors'
        })
      );
    console.warn('some error - ', error); //TODO: Delete this before checkIN
  }
  
  doneRedirect() {
    if (this.$state.params && this.$state.params.returnUrl) {
      this.$location.url(this.$state.params.returnUrl);
    } else {
      this.$state.go('home.page');
    }
    this.cudFsLoaderService.hide();
  }
}
LoginPageController.$inject = dependencies;