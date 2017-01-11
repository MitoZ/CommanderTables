'use strict';
/**
 * Created by dzmitry.barkouski on 06.01.2017.
 */
import angular from 'angular';
import localStorageService from './LocalStorageService';

let dependencies = [localStorageService];

export default angular.module('dataBaseTools', dependencies)
  .name;