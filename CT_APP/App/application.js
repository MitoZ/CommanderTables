'use strict';
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/
//import and create local var angular
import angular from 'angular';

//import angular modules
import uiRouter from 'angular-ui-router';
// import 'ui-router-extras';
// import 'ui-router-extras/release/modular/ct-ui-router-extras.future.min.js';
import ngMessages from 'angular-messages';

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
import homePageModule from './Pages/Home';
import authServiceModule from './Modules/AuthService';

//start application
(function () {
  
  let dependencies = [
    uiRouter,
    ngMessages,
    ngMaterial,
    // 'ct.ui.router.extras',
    
    dataBaseTools,
    loginPageModule,
    homePageModule,
    authServiceModule
  ];
  
  angular.module('commanderTablesApp', dependencies);
  
  angular.module('commanderTablesApp')
    .config(config)
    .run([
      '$rootScope',
      '$location',
      '$state',
      'localStorageService',
      'authService',
      function ($rootScope, $location, $state, localStorageService, authService) {
        localStorageService.loadData();
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          // requires authorization?
          if (!toState.unauthorized) {
            toState.resolve = toState.resolve || {};
            toState.resolve.authServiceResolver = toState.resolve.authServiceResolver || [ 'authService', function (authService) {
              return authService.auth.$requireSignIn();
            }];
          }
            /*if (!toState.resolve.localStorageResolver) {
              // inject resolver
              // toState.resolve.authorizationResolver.$inject = [];
              toState.resolve.localStorageResolver = [
                'localStorageReady',
                function (localStorageReady) {
                  return localStorageReady;
                }
              ];
            }*/
        });
        
        $rootScope.$on('$stateChangeError', function (evt, toState, toParams, fromState, fromParams, error) {
          // We can catch the error thrown when the $requireSignIn promise is rejected
          // and redirect the user back to the home page
          if (error === 'AUTH_REQUIRED') {
            $state.go('login.page');
            $location.search();
          }
        });
      }
    ]);
})();