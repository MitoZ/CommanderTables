'use strict';
/*
 * controller.js
 * CommanderTables
 * Created by MitoZ in 08.01.17
*/
let dependencies = [
  'authService',
  '$state'
];
export default class MainPageController {
  constructor(authService, $state) {
    this.authService = authService;
    this.state = $state;
    // alert('home PAGE');
  }
  
  logout () {
    let conf = confirm('logout');
    if (conf) {
      this.authService.logout().then(()=>{
        this.state.reload();
      });
    }
  }
  
}
MainPageController.$inject = dependencies;