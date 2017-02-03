'use strict';
/**
 * Created by dzmitry.barkouski on 02.02.2017.
 */

import angular from 'angular';
import fs_loader from './FSLoader';

let dependencies = [
  fs_loader
];
export default angular.module('customUIDirectives', dependencies)
  .name;