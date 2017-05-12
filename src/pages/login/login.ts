import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Signup } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
	backimg: string;
  constructor(public navCtrl: NavController) {
  		this.backimg = 'img/bg.png';
  }

  goToSignup( mode ){
  	this.navCtrl.push(Signup)
  }

}
