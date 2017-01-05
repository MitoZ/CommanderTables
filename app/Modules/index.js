'use strict';
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/
//import and create local var angular
import angular from 'angular';

//import angular modules
import LocalForageModule from 'angular-localForage';
import uiRouter from 'angular-ui-router';

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

//start application
(function () {
  //add global var for firebase + add firebase settings
  window.firebase = firebase;
  firebase.initializeApp({
    apiKey: 'AIzaSyAuf8l0fpJfMNbmyP7oSL1dSkITbdrLz-A',
    authDomain: 'commandertables.firebaseapp.com',
    databaseURL: 'https://commandertables.firebaseio.com',
    storageBucket: 'commandertables.appspot.com',
    messagingSenderId: '160825685933'
  });
  
  angular.module('commanderTablesApp', [LocalForageModule, uiRouter, ngMaterial, 'firebase']);
  
  // require('./Pages/UsersList/controller')(angular);
  // require('./Pages/Tables/controller')(angular);
  // require('./Tools/localStorageService')(angular);
  
  angular.module('commanderTablesApp')
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      '$localForageProvider',
      // '$mdIconProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider, $localForageProvider/*, $mdIconProvider*/) {
        // $mdIconProvider.iconSet('sprite', './Libs/Evil_Icons/svg_sprite/sprite.svg');
        $localForageProvider.config({
          name: 'CT'
        });
        $locationProvider.html5Mode(true);
        
        $urlRouterProvider.otherwise('/');
        
        // $stateProvider;
        // $routeProvider
        //   .when('/', {
        //     template: require('./Pages/UsersList/template.html'),
        //     controller: 'page-usersList-controller'
        //   })
        //   .when('/tables', {
        //     template: require('./Pages/Tables/template.html'),
        //     controller: 'page-tablesList-controller'
        //   })
        //   .otherwise({
        //     redirectTo: '/'
        //   });
      }
    ])
    .run(['$firebaseAuth', function ($firebaseAuth) {
      // let ref = firebase.database().ref();
      // let auth = $firebaseAuth();
      /*auth.$signInWithPopup('facebook').then(function(firebaseUser) {
        console.log('Signed in as:', firebaseUser.uid);
        console.log('USER - ', firebaseUser);
      }).catch(function(error) {
        console.log('Authentication failed:', error);
      });*/
      // console.log(ref); //TODO: Delete this before checkIN
    }]);
})();