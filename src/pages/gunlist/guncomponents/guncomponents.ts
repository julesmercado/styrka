import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-guncomponents',
  templateUrl: 'guncomponents.html'
})
export class GunComponents {

  constructor(public navCtrl: NavController , public alertCtrl: AlertController) {

  }
  	alert() {
	    let prompt = this.alertCtrl.create({
	      title: 'Add to favorite',
	      //message: "Enter a name for this new album you're so keen on adding",
	      inputs: [
	        {
	          name: 'title',
	          placeholder: 'Title'
	        },
	      ],
	      buttons: [
	        {
	          text: 'Not Now',
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
}
