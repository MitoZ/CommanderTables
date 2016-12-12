"use strict";
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/

module.exports = function (angular) {
  
  function usersListDirective() {
    return {
      restrict: 'E',
      template: require('./usersList_template.html'),
      controller: 'userListController',
      controllerAs: 'vm'
    };
  }
  
  angular.module('commanderTablesApp')
    .directive('usersListDirective', usersListDirective);
};