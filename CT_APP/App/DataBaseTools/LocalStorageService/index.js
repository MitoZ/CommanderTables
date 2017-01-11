'use strict';
/**
 * Created by dzmitry.barkouski on 11.01.2017.
 */

import angular from 'angular';
import localForage from 'angular-localForage';

import config from './config';
import service from './service';

let dependencies = [localForage];

export default angular.module('dataBaseTools.localStorage', dependencies)
  .value('localStorageReady', new Promise(() => {}))
  .config(config)
  .service('localStorageService', service)
  .name;