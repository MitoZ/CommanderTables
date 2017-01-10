'use strict';
/**
 * Created by dzmitry.barkouski on 10.01.2017.
 */

import angular from 'angular';
import config from './config';
import controller from './controller';
import './styles.less';

export default angular.module('loginRecoveryModule', [])
  .controller('loginRecoveryController', controller)
  .config(config)
  .name;