"use strict";
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/
import './Layout/layout.less';
import angular from 'angular';
import ngRoute from 'angular-route';
import LocalForageModule from "angular-localForage";

(function () {
  require("../Libs/ng-tiny-scrollbar/ng-tiny-scrollbar[fixed]")(angular);
  
  angular.module('commanderTablesApp', [ngRoute, LocalForageModule, 'ngTinyScrollbar']);
  
  require('./Pages/UsersList/controller')(angular);
  require('./Pages/Tables/controller')(angular);
  
  angular.module('commanderTablesApp')
    .config([
      '$routeProvider',
      '$locationProvider',
      '$localForageProvider',
      'scrollbarProvider',
      function ($routeProvider, $locationProvider, $localForageProvider, scrollbarProvider) {
        scrollbarProvider.defaults.autoUpdate = true;
        
        $localForageProvider.config({
          name: 'CT'
        });
        $locationProvider.hashPrefix('');
        
        $routeProvider
          .when('/', {
            template: require('./Pages/UsersList/template.html'),
            controller: 'page-usersList-controller'
          })
          .when('/tables', {
            template: require('./Pages/Tables/template.html'),
            controller: 'page-tablesList-controller'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
})();