'use strict';
/**
 * Created by dzmitry.barkouski on 06.01.2017.
 */

config.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  '$mdThemingProvider',
  // '$mdIconProvider',
];

export default function config(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider,
  $mdThemingProvider/*,
  $mdIconProvider*/) {
  // $mdIconProvider.iconSet('sprite', './Libs/Evil_Icons/svg_sprite/sprite.svg');
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('orange');
  
  $locationProvider.html5Mode(true);
  
  $urlRouterProvider.otherwise('/login');
  
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