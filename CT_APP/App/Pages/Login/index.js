'use strict';
/*
 * index.js
 * CommanderTables
 * Created by MitoZ in 06.01.17
*/

import angular from 'angular';
import config from './config';
import controller from './controller';
import './styles.less';

import recoveryPage from './Recovery';

let dependencies = [
  recoveryPage
];

export default angular.module('loginPageModule', dependencies)
  .controller('loginPageController', controller)
  .config(config)
  .name;