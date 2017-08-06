import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToItems() {
    this.navCtrl.push(ItemsPage);
  }
}
