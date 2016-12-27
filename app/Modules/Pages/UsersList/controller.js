"use strict";
/**
 * Created by dzmitry.barkouski on 27.12.2016.
 */

import usersListModule from '../../Page_Modules/Page_UsersList/UsersList/usersList_controller';

module.exports = function (angular) {
  function controller(usersList) {
    usersListModule(angular, usersList);
  }
  angular
    .module('commanderTablesApp')
    .factory('usersList', function () {
      return [];
    })
    .controller('page-usersList-controller', ['usersList', controller]);
};