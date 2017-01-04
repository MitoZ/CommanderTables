'use strict';
/**
 * Created by dzmitry.barkouski on 27.12.2016.
 */

import usersListModule from '../../Page_Modules/Page_UsersList/UsersList/controller';

module.exports = function (angular) {
  let controller = function () {
    usersListModule(angular);
  };
  angular
    .module('commanderTablesApp')
    .controller('page-usersList-controller', controller);
};