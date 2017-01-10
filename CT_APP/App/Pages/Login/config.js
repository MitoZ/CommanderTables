'use strict';
/*
 * config.js
 * CommanderTables
 * Created by MitoZ in 06.01.17
*/

config.$inject = [
  '$stateProvider',
];

export default function config($stateProvider) {
  $stateProvider
    .state({
      name: 'login',
      template: require('./layout_template.html')
    })
    .state({
      name: 'login.page',
      url: '/login',
      template: require('./template.html'),
      controller: 'loginPageController',
      controllerAs: 'vm'
    });
}