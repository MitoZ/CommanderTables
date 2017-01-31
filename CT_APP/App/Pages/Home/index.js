'use strict';
/**
 * Created by dzmitry.barkouski on 26.01.2017.
 */
import angular from 'angular';
import config from './config';
import controller from './controller';
import './styles.less';


let dependencies = [
];

export default angular.module('homePageModule', dependencies)
  .controller('mainPageController', controller)
  .config(config)
  .name;