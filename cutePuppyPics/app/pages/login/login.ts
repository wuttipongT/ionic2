import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, Platform } from 'ionic-angular';
import {GettingstartedPage} from '../gettingstarted/gettingstarted';
import {WebReference} from "../../web_reference/webreference";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  template: `
    <ion-header>
    <ion-navbar>
      <ion-title>
        Login
      </ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content class="padding">
    <form  #signupCreds="ngForm" (ngSubmit)="frmLogin_Submit(login)">
      <ion-list inset>
        <ion-item>
          <ion-label>Username</ion-label>
          <ion-input type="text"  [(ngModel)]="login.username" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Password</ion-label>
          <ion-input type="password" [(ngModel)]="login.password" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Database</ion-label>
          <ion-select [(ngModel)] = "login.branch" >
            <ion-option *ngFor="#optBranch of _optBranchs" value="{{optBranch.Branch_Id}}">{{optBranch.Branch_Name}}</ion-option>
          </ion-select>
        </ion-item>
         <ion-item>
          <ion-label>Version : {{version}}</ion-label>
        </ion-item>
      </ion-list>
      <div padding>
        <button block type="submit">Login</button>
      </div>
    </form>
  </ion-content>
`,
  providers: [WebReference],
})
export class LoginPage implements OnInit {

  public _optBranchs: any;
  public login = {}
  public version:any;
  constructor(private nav: NavController, private navParams: NavParams, private Binsinnes_Layer: WebReference, private platform: Platform ) {//private  Binsinnes_Layer: WebReference
    this.nav = nav;
    this.navParams = navParams;
  }

  frmLogin_Submit(login) {
    //server call for login
   if(login.branch){

   }

   console.dir(login);
    //this.nav.setRoot(GettingstartedPage);
  }

  // goSignupPage() {
  //       this.nav.push(SignupPage);
  // }
  ngOnInit(): any {
    this.Binsinnes_Layer.LoadBranch().subscribe(
      data => this._optBranchs = data,//JSON.stringify(data),
      error => alert(error)
      //() => this._optBranchs.unshift({Branch_Id:'-1',Branch_Name: '--Database--'})
    );
    this.version = this.platform.version();
    console.log(JSON.stringify(this.version, null, 4));
  }
}
