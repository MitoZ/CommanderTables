'use strict';
/**
 * Created by dzmitry.barkouski on 06.01.2017.
 */
import angular from 'angular';

config.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  '$mdThemingProvider',
  'DSProvider',
  'DSHttpAdapterProvider'
];

export default function config(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider,
  $mdThemingProvider,
  DSProvider,
  DSHttpAdapterProvider
) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('deep-orange')
    .warnPalette('red')
    .backgroundPalette('grey');
  // $mdThemingProvider.theme('errors')
  //   .primaryPalette('red')
  //   .accentPalette('orange');
  // $mdIconProvider.iconSet('sprite', './Libs/Evil_Icons/svg_sprite/sprite.svg');
  $mdThemingProvider.enableBrowserColor({
    theme: 'default', // Default is 'default'
    palette: 'primary'//, // Default is 'primary', any basic material palette and extended palettes are available
    // hue: '200' // Default is '800'
  });
  
  $locationProvider.html5Mode(true);
  
  $urlRouterProvider.otherwise('/');
  
  angular.extend(DSProvider.defaults, {});
  angular.extend(DSHttpAdapterProvider.defaults, {});
}