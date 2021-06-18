

import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import {ListePage} from '../liste/liste';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  rootPage:any = TabsPage;
  createSuccess = false;
  user = { name: '', email: '', password: '',
 };

  constructor(
    private navCtrl: NavController,
    public authService: AuthProvider,
    private alertCtrl: AlertController
  ) {}

  public register() {
    
      this.authService.register(this.user).then(success => {
        if (success) {
          this.createSuccess = true;
         // this.showPopup("Success", "Account created.");
        
          this.navCtrl.push(ListePage);
          this.user.name ="";
          this.user.email ="";
          this.user.password ="";
        } else {
          this.showPopup("Error", "Problem creating account.");
          
        }
      },
        error => {
          this.showPopup("Error", error);
        });
    }
  

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
