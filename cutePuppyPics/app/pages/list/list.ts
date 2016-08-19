import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



/*
  Generated class for the ListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/list/list.html',
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  constructor(private nav: NavController, private params: NavParams) {
  	this.nav =  nav;
  	this.params = params;
//if we navigated to this page, we will have an item available as a new param
  	this.selectedItem = params.get('item');

  	this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        'american-football', 'boat', 'bluetooth', 'build'];
    this.items = [];

    for(let i = 1; i<11;i++){
    	this.items.push({
    		title: 'Item ' + i,
    		note: 'This is item #' + i,
    		icon: this.icons[Math.floor(Math.random()  * this.icons.length)]
    	});
    }
  }

  itemTapped(event, item){
  	this.nav.push(ListPage, {
  		item:item
  	});
  }
}
