import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { GunComponents } from './guncomponents/guncomponents';

@Component({
  selector: 'page-gunlist',
  templateUrl: 'gunlist.html'
})
export class Gunlist {
	guns: any; favorites: any;
  constructor(public navCtrl: NavController , public alertCtrl: AlertController) {
  	this.guns = ['Remington 700 R5', 'hhh', 'New Gun', '270 Winchester', 'aaa', 'ssss', 'Remington 700 match'];
  	this.favorites = [	'New Gun - Fusion', 'Remington 700 R5 - Fusion', '270 Winchester - 308 Win', 
  						'Remington 700 R5 - Federal Fusion', 'New Gun - Fusion', 'hhh - ssss', 
  						'Remington 700 R5 - Federal Fusion', 'Remington 700 R5 - Federal Fusion'];
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
