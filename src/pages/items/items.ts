import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemProvider } from '../../providers/item/item';
import { Item } from '../../models/item';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ItemsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  all_items : Array<Item> = [];
  itemsBkp : Array<Item> = [];
  search : string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private itemService : ItemProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
    this.itemService.getItems().subscribe((value)=> {
      console.log(value);
      this.all_items = value;
      this.itemsBkp = value;
    },
    (error)=> {

    },
    () => {
    });
  }

  back() {
    this.navCtrl.pop();
  }

   getItems(ev: any) {
    
    let search = ev.target.value;

    if(search && search.trim() != '') {
      this.all_items = this.all_items.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
    }else {
      this.all_items = this.itemsBkp;
    }
  }

  remove(item : any, index : number) {
    console.log(item, index);
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'You are about to delete ' + item.name + ", " + item.id,
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.all_items.splice(index,1);
          }
        }
      ]
    });
    confirm.present();
  }
}
