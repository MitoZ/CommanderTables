'use strict';
/**
 * Created by dzmitry.barkouski on 11.01.2017.
 */
config.$inject = ['$localForageProvider'];

export default function config($localForageProvider) {
  $localForageProvider.config({
    name: 'CT'
  });
}