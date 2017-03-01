'use strict';
/**
 * Created by dzmitry.barkouski on 11.01.2017.
 */

export default class AuthService{
  constructor($firebaseAuth, $mdToast) {
    // let ref = new Firebase('https://commandertables.firebaseio.com/');
    this.auth = $firebaseAuth();
    this.$mdToast = $mdToast;
  }
  
  login(provider, credential) {
    let prom = new Promise(()=>{});
    if (typeof provider === 'string' && provider.length) {
      switch (provider) {
        case 'mail':
          if (credential && credential.mail && credential.pass) {
            prom = this.auth.$signInWithEmailAndPassword(credential.mail, credential.pass);
          } else {
            prom.reject();
          }
          break;
        case 'anon':
    
          break;
        default:
          prom = this.auth.$signInWithPopup(provider);
          break;
      }
    } else {
      prom.reject();
    }
    return prom;
  }
  
  logout() {
    return this.auth.$signOut();
  }
  
  signIn(credential) {
    return this.auth.$createUserWithEmailAndPassword(credential.mail, credential.pass);
  }
  
  resetPass(mail) {
    return this.auth.$sendPasswordResetEmail(mail);
  }
  
  checkMailVerification() {
    let userInfo = this.auth.$getAuth();
    if (userInfo && userInfo.providerData && userInfo.providerData.length && userInfo.providerData[0] && userInfo.providerData[0].providerId === 'password' && !userInfo.emailVerified) {
      this.$mdToast.show({
        hideDelay: 10000,
        position: 'top right',
        controller: toastCtrl,
        controllerAs: 'vm',
        toastClass: 'toast-warn',
        template: require('./MailVerification_Failed_ToastTemplate.html')
      });
    }
    
  }
}

AuthService.$inject = [
  '$firebaseAuth',
  '$mdToast'
];

function toastCtrl($mdToast) {
  this.closeToast = function () {
    if (this.isDlgOpen) {return;}
    
    $mdToast
      .hide()
      .then(() => {
        this.isDlgOpen = false;
      });
  };
}
toastCtrl.$inject = ['$mdToast'];