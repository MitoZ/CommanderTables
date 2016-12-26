"use strict";
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/
import './Layout/layout.less';

(function () {
  const angular = require('angular');
  angular.module('commanderTablesApp', []);
  
  require('./UsersList/usersList_controller')(angular);
})();