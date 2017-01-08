'use strict';
/*
 * config.js
 * CommanderTables
 * Created by MitoZ in 06.01.17
*/

config.$inject = [
  '$stateProvider',
];

export default function config(
  $stateProvider) {
  $stateProvider.state('loginPage', {
    url: '/login',
    template: require('./template.html'),
    controller: 'loginPageController',
    controllerAs: 'vm'
  });
}