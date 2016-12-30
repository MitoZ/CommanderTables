"use strict";
/**
 * Created by dzmitry.barkouski on 08.12.2016.
 **/

module.exports = function (angular) {
  
  function usersListModels(localStorageService) {
    return /*usersList*/{
      users: []
    };
  }
  
  angular.module('commanderTablesApp')
    .factory('usersListModels', ['localStorageService', usersListModels]);
};