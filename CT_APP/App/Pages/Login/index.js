'use strict';
/*
 * index.js
 * CommanderTables
 * Created by MitoZ in 06.01.17
*/

import angular from 'angular';
import config from './config';
import controller from './controller';
import './styles.less'

export default angular.module('loginPageModule', [])
  .controller('loginPageController', controller)
  .config(config)
  .name;