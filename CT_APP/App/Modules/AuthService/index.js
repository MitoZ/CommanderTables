'use strict';
/**
 * Created by dzmitry.barkouski on 11.01.2017.
 */


import angular from 'angular';
import ngMaterial from 'angular-material';

//import firebase database modules + angularFire
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'angularfire';

import localStorageService from '../../DataBaseTools/LocalStorageService';

import service from './service';

let dependencies = [
  'firebase',
  ngMaterial,
  localStorageService
];

//add global var for firebase + init settings
window.firebase = firebase;
firebase.initializeApp({
  apiKey: 'AIzaSyAuf8l0fpJfMNbmyP7oSL1dSkITbdrLz-A',
  authDomain: 'commandertables.firebaseapp.com',
  databaseURL: 'https://commandertables.firebaseio.com',
  storageBucket: 'commandertables.appspot.com',
  messagingSenderId: '160825685933'
});

export default angular.module('AuthServiceModule', dependencies)
  .service('authService', service)
  .name;