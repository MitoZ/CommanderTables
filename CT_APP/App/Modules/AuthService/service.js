'use strict';
/**
 * Created by dzmitry.barkouski on 11.01.2017.
 */

export default class AuthService{
  constructor($firebaseAuth) {
    // let ref = new Firebase('https://commandertables.firebaseio.com/');
    this.auth = $firebaseAuth();
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
  
  signIn(type, credential) {
    
  }
}

AuthService.$inject = [
  '$firebaseAuth'
];