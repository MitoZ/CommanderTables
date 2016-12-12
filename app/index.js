"use strict";
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/

(function () {
  const angular = require('angular');
  angular.module('commanderTablesApp', []);
  
  require('./Modules/UsersList/usersList_controller')(angular);
})();