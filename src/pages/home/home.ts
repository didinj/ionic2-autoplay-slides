import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slideData = [{ image: "assets/images/slide-1.jpg" },{ image: "assets/images/slide-2.jpg" },{ image: "assets/images/slide-2.jpg" }]
  slideLength: boolean = false;

  constructor(public navCtrl: NavController) {
    if(this.slideData.length>0) {
      this.slideLength = true;
    }
  }

}
