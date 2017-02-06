'use strict';
/**
 * Created by dzmitry.barkouski on 06.01.2017.
 */

config.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  '$mdThemingProvider'
];

export default function config(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider,
  $mdThemingProvider) {
  // $mdIconProvider.iconSet('sprite', './Libs/Evil_Icons/svg_sprite/sprite.svg');
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('orange')
    /*.errrosPalette('red')*/;
  $mdThemingProvider.theme('errors')
    .primaryPalette('red')
    .accentPalette('orange');
  
  $locationProvider.html5Mode(true);
  
  $urlRouterProvider.otherwise('/');
}