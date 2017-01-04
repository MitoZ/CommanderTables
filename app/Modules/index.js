'use strict';
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/
import './Layout/layout.less';
import angular from 'angular';
import LocalForageModule from 'angular-localForage';
import uiRouter from 'angular-ui-router';
import 'angular-material/angular-material.css';
import 'angular-aria';
import 'angular-animate';
import ngMaterial from 'angular-material';

(function () {
  
  angular.module('commanderTablesApp', [LocalForageModule, uiRouter, ngMaterial]);
  
  // require('./Pages/UsersList/controller')(angular);
  // require('./Pages/Tables/controller')(angular);
  // require('./Tools/localStorageService')(angular);
  
  angular.module('commanderTablesApp')
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      '$localForageProvider',
      '$mdIconProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider, $localForageProvider, $mdIconProvider) {
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
    /*.run(['localStorageService', function (localStorageService) {
      
    }])*/;
})();