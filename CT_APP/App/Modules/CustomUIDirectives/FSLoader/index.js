'use strict';
/**
 * Created by dzmitry.barkouski on 02.02.2017.
 */

import angular from 'angular';
import fs_loader_service from './service';
import './styles.scss';

export default angular.module('customUIDirectives.fs_loader', [])
  .directive('cudFsLoader', fs_loader)
  .service('cudFsLoaderService', fs_loader_service)
  .name;

function fs_loader() {
  return {
    restrict: 'EA',
    template: require('./template.html'),
    controller: ['cudFsLoaderService',
      function (cudFsLoaderService) {
        let vm = this;
        vm.isVis = cudFsLoaderService.isVis;
      }],
    controllerAs: 'vm'
  };
}