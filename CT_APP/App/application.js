'use strict';
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/
//import and create local var angular
import angular from 'angular';

//import angular modules
import uiRouter from 'angular-ui-router';
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
import authService from './Modules/AuthService';

//start application
(function () {
  
  let dependencies = [
    uiRouter,
    ngMessages,
    ngMaterial,
    
    dataBaseTools,
    loginPageModule,
    authService
  ];
  
  angular.module('commanderTablesApp', dependencies);
  
  angular.module('commanderTablesApp')
    .config(config)
    .run([
      '$rootScope',
      '$location',
      function ($rootScope, $location) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          // requires authorization?
          if (!toState.unauthorized) {
            toState.resolve = toState.resolve || {};
            if (!toState.resolve.authorizationResolver) {
              // inject resolver
              toState.resolve.authorizationResolver.$inject = ['authService', 'localStorageReady'];
              toState.resolve.authorizationResolver = function (authService, localStorageReady) {
                return authService.authorize();
              };
            }
          }
        });
        // $rootScope.$on('$stateChangeSuccess', function (...rest) {
          // requires authorization?
          // console.log(rest); //TODO: Delete this before checkIN
          // if (!to.unauthorized) {
          //   to.resolve = to.resolve || {};
          //   if (!to.resolve.authorizationResolver) {
          //     // inject resolver
          //     to.resolve.authorizationResolver = [
          //       'authService',
          //       function (authService) {
          //         return authService.authorize();
          //       }
          //     ];
          //   }
          // }
        // });
        
        $rootScope.$on('$stateChangeError', function (evt, toState, toParams, fromState, fromParams, error) {
          // if (error instanceof AuthorizationError) {
          //   debugger;
            // redirect to login with original path we'll be returning back to
            // $location
            //   .path('/login')
            //   .search('returnTo', toState.originalPath);
          // }
        });
      }
    ]);
})();