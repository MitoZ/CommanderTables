'use strict';
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/
//import and create local var angular
import angular from 'angular';

//import angular modules
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';

//import firebase database modules + angularFire
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'angularfire';

//import material ui for angular
import 'angular-material/angular-material.css';
import 'angular-aria';
import 'angular-animate';
import ngMaterial from 'angular-material';
//import custom base styles
import './Layout/layout.less';

//import application parts
import config from './application_config';

//application dependencies
import dataBaseTools from './DataBaseTools';
import loginPageModule from './Pages/Login';

//start application
(function () {
  //add global var for firebase + init settings
  window.firebase = firebase;
  firebase.initializeApp({
    apiKey: 'AIzaSyAuf8l0fpJfMNbmyP7oSL1dSkITbdrLz-A',
    authDomain: 'commandertables.firebaseapp.com',
    databaseURL: 'https://commandertables.firebaseio.com',
    storageBucket: 'commandertables.appspot.com',
    messagingSenderId: '160825685933'
  });
  
  let dependencies = [
    uiRouter,
    ngMessages,
    ngMaterial,
    'firebase',
  
    dataBaseTools,
    loginPageModule
  ];
  
  angular.module('commanderTablesApp', dependencies);
  
  angular.module('commanderTablesApp')
    .config(config)/*
    .run(['localStorageService', function (localStorageService) {
      localStorageService.get();
      // let ref = firebase.database().ref();
      // let auth = $firebaseAuth();
      /!*auth.$signInWithPopup('facebook').then(function(firebaseUser) {
        console.log('Signed in as:', firebaseUser.uid);
        console.log('USER - ', firebaseUser);
      }).catch(function(error) {
        console.log('Authentication failed:', error);
      });*!/
      // console.log(ref); //TODO: Delete this before checkIN
    }])*/;
})();