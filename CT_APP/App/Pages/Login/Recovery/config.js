'use strict';
/**
 * Created by dzmitry.barkouski on 10.01.2017.
 */
config.$inject = [
  '$stateProvider',
];

export default function config($stateProvider) {
  $stateProvider.state({
    name: 'login.recovery',
    url: '/recovery',
    template: require('./template.html'),
    controller: 'loginRecoveryController',
    controllerAs: 'vm'
  });
}
