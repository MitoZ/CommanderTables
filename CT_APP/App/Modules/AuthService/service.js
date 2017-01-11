'use strict';
/**
 * Created by dzmitry.barkouski on 11.01.2017.
 */

export default class AuthService{
  constructor(localStorageService, $firebaseAuth) {
    this.auth = $firebaseAuth();
    this.LSService = localStorageService;
  }
  
  isAuthorized() {
    return !!this.authorized;
  }
  
  logIn() {
    
  }
  logOut() {
    
  }
  signIn() {
    
  }
}


AuthService.$inject = [
  'localStorageService',
  '$firebaseAuth'
];