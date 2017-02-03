'use strict';
/**
 * Created by dzmitry.barkouski on 11.01.2017.
 */

export default class FSLoaderService {
  constructor() {
    this.isVis = {visible:false};
  }
  
  show() {
    this.isVis.visible = true;
  }
  
  hide() {
    this.isVis.visible = false;
  }
}

FSLoaderService.$inject = [];