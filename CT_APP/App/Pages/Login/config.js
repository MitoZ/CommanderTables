'use strict';
/*
 * config.js
 * CommanderTables
 * Created by MitoZ in 06.01.17
*/

config.$inject = [
  '$stateProvider',
];

export default function config($stateProvider) {
  $stateProvider
    .state({
      name: 'login',
      template: require('./layout_template.html')
    })
    .state({
      name: 'login.page',
      url: '/login?returnUrl',
      template: require('./template.html'),
      controller: 'loginPageController',
      controllerAs: 'vm',
      unauthorized: true,
      resolve: {
        redirectResolver: ['$q' ,'$state','$location', 'authService',
          function ($q, $state, $location, authService) {
            let redirectPromise = $q.defer();
            authService.auth.$requireSignIn().then(()=>{
              redirectPromise.reject();
              if ($state.params && $state.params.returnUrl) {
                $location.url($state.params.returnUrl);
              } else {
                $state.go('home.page');
              }
            }, ()=>{
              redirectPromise.resolve();
            });
            return redirectPromise.promise;
          }]
      }
    });
}