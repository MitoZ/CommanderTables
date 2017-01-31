'use strict';
/**
 * Created by dzmitry.barkouski on 11.01.2017.
 */
import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

export default class AuthService{
  constructor(/*localStorageService, */$firebaseAuth, $firebaseObject) {
    // let ref = new Firebase('https://commandertables.firebaseio.com/');
    this.auth = $firebaseAuth();
    // this.LSService = localStorageService;
    console.log( Firebase ); //TODO: Delete this before checkIN
    console.log( this.auth.$getAuth() ); //TODO: Delete this before checkIN
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
  // 'localStorageService',
  '$firebaseAuth',
  '$firebaseObject'
];