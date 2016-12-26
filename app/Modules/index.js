"use strict";
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/
import './Layout/layout.less';

(function () {
  const angular = require('angular');
  const angular_route = require('angular-route');
  angular.module('commanderTablesApp', []);
  
  require('./UsersList/usersList_controller')(angular);
})();