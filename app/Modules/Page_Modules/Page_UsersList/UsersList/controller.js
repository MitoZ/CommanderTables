"use strict";
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/
import './styles.less';
import directives from './directives';
import services from './directives';

module.exports = function (angular) {
  const userListController = function (usersListModels) {
    let vm = this;
    vm.users = usersListModels.users;
  };
  angular.module('commanderTablesApp')
    .controller('userListController', ['usersListModels', userListController]);
  
  directives(angular);
  services(angular);
};