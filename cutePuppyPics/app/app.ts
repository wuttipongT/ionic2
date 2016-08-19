import {Component} from '@angular/core';
import {Platform, ionicBootstrap, App, Page,  MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import {ListPage} from './pages/list/list';
// import { Page, IonicApp } from 'ionic-angular/index';
// import {IonicApp, Alert} from 'ionic-angular';
import {GettingstartedPage} from './pages/gettingstarted/gettingstarted';
import {CalculatorPage} from './pages/calculator/calculator';

@Component({
  //template: '<ion-nav [root]="rootPage"></ion-nav>'
  //template: '<ion-content [root]="rootPage"></ion-content>'
  //templateUrl: 'build/pages/login/login.html'
  template: `
      <ion-menu [content]="content">
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
        <ion-content>
          <ion-list>
           <button ion-item (click)="openPage(calcPage)">Calculator</button>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
      
      `,
})
// <button ion-item *ngFor="#p of pages" (click)="openPage(p)">{{p.title}}</button>
export class MyApp {

  private rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;
  private calcPage = CalculatorPage;
  constructor(
    private platform: Platform,
    private app: App,
    private menu: MenuController)
  {
    //this.rootPage = TabsPage;
    this.platform = platform;
    this.app = app;
     // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Getting Started', component: GettingstartedPage},
      {title: 'List', component: ListPage},
      {title: 'Calculator', component: CalculatorPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

    });
  }
  // openPage(page){
  //     // Reset the content nav to have just this page
  //     // we wouldn't want the back button to show in this scenario
  //     // let nav = this.app.getComponent('nav');
  //     // nav.setRoot(page.component);

  //     let nav = this.app.getActiveNav();
  //     nav.push(page.component);
  // }
  openPage(page) {
    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage = page;

    // close the menu when clicking a link from the menu
    this.menu.close();
  }
}

ionicBootstrap(MyApp);
