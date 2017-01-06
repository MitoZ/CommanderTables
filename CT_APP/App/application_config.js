'use strict';
/**
 * Created by dzmitry.barkouski on 06.01.2017.
 */

config.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  '$localForageProvider',
  '$mdThemingProvider',
  // '$mdIconProvider',
];

export default function config($stateProvider,
  $urlRouterProvider,
  $locationProvider,
  $localForageProvider,
  $mdThemingProvider/*,
  $mdIconProvider*/) {
  // $mdIconProvider.iconSet('sprite', './Libs/Evil_Icons/svg_sprite/sprite.svg');
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('orange');
  
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