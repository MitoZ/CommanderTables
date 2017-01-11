'use strict';
/**
 * Created by dzmitry.barkouski on 11.01.2017.
 */

export default class LocalStorageService {
  constructor($localForage, $location, localStorageReady) {
    this.localForage = $localForage;
    this.readyPromise = localStorageReady;
    this.loadData($location.path());
  }
  
  loadData(dataPage, tryCounter) {
    dataPage = dataPage || 'defaultPage';
    let self = this,
      counter = tryCounter || 10;
    
    self.localForage
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
  }
  
  get() {}
  
  set() {}
}

LocalStorageService.$inject = [
  '$localForage',
  '$location',
  'localStorageReady'
];