"use strict";
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/
import './usersList.less';

module.exports = function (angular, usersList) {
  require('./usersList_directives')(angular);
  require('./usersList_services')(angular);
  function userListController(usersListModels) {
    let vm = this;
    vm.users = usersListModels.users;
  }
  angular.module('commanderTablesApp')
    .controller('userListController', ['usersListModels', userListController]);
};