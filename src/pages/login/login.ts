import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
	backimg: string;
  constructor(public navCtrl: NavController) {
  		this.backimg = 'img/bg.png';
  }

}
