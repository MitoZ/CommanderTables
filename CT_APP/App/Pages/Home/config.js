'use strict';
/**
 * Created by dzmitry.barkouski on 26.01.2017.
 */

config.$inject = [
  '$stateProvider',
];

export default function config($stateProvider) {
  $stateProvider
    .state({
      name: 'home',
      template: require('./layout_template.html')
    })
    .state({
      name: 'home.page',
      url: '/',
      template: require('./template.html'),
      controller: 'mainPageController',
      controllerAs: 'vm',
      resolve: {}
    });
}