import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {

  constructor(private nav: NavController, private navParams: NavParams) {
  	this.nav = nav;
  	this.navParams = navParams;
  }

  signup(){
  	  //server call for signup
      //this.nav.setRoot(GettingStartedPage);
  }

}
