import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { GunComponents } from './guncomponents/guncomponents';

@Component({
  selector: 'page-gunlist',
  templateUrl: 'gunlist.html'
})
export class Gunlist {

  constructor(public navCtrl: NavController , public alertCtrl: AlertController) {

  }
  	showPrompt() {
	    let prompt = this.alertCtrl.create({
	      title: 'Login',
	      message: "Enter a name for this new album you're so keen on adding",
	      inputs: [
	        {
	          name: 'title',
	          placeholder: 'Title'
	        },
	      ],
	      buttons: [
	        {
	          text: 'Cancel',
	          handler: data => {
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: 'Save',
	          handler: data => {
	            console.log('Saved clicked');
	          }
	        }
	      ]
	    });
	    prompt.present();
    }
    goToComponents(){
    	this.navCtrl.push(GunComponents);
    	
    }
}
