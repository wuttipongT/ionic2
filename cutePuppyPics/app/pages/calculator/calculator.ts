import { Component } from '@angular/core';
import {CORE_DIRECTIVES,FORM_DIRECTIVES} from '@angular/common';
import { NavController } from 'ionic-angular';
import { Calc } from './calc';

/*
  Generated class for the CalculatorPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'angular-typescript-form',
  templateUrl: 'build/pages/calculator/calculator.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CalculatorPage {
  
  myCalc = new Calc(10,10,10,10);
  constructor(private nav: NavController) {
  	console.log('Form Component Started');
  }

  submitted = false; //form not submitted : default
  data: string; //this variable contains our data

  onSubmit(data){
  	this.submitted = true;
  	this.data = JSON.stringify(data, null, 2);
  	console.dir(data);

  }
}
