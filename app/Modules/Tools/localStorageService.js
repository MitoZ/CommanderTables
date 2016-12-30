"use strict";
/**
 * Created by dzmitry.barkouski on 30.12.2016.
 */

module.exports = function (angular) {
  let LSService = function ($localForage) {
    let readyPromise = new Promise();
    let LSService_instance = {
      readyPromise: readyPromise,
      loadData: function (dataPage, tryCounter) {
        let self = this;
        dataPage = dataPage || 'defaultPage';
        let counter = tryCounter || 10;
        $localForage
          .getItem(dataPage)
          .then(
            function (data) {
              console.info('loading from LocalStorage success'); //TODO: Delete this before checkIN
              self.data = data || {};
              self.readyPromise.resolve();
            },
            function () {
              if (tryCounter) {
                console.warn('loading from LocalStorage error'); //TODO: Delete this before checkIN
                console.warn('try_counter = ', counter--); //TODO: Delete this before checkIN
                setTimeout(() => self.loadData(dataPage, counter), 100);
              } else {
                console.error('could not load data from local storage'); //TODO: Delete this before checkIN
                self.data = {};
                self.readyPromise.resolve();
              }
            });
        if (typeof tryCounter === 'undefined') {
          return self.readyPromise;
        }
      },
      set: function (data) {
        
      },
      get: function (key) {
        
        return;
      }
    };
  
    return LSService_instance;
  };
  angular
    .module('commanderTablesApp')
    .factory('localStorageService', ['$localForage', LSService])
};