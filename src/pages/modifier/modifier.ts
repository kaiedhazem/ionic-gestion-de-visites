import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the ModifierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier',
  templateUrl: 'modifier.html',
})
export class ModifierPage {
  createSuccess = false;
  user = { 
    id: '',
     email: '', 
     password: '',
 };
 membre : any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams , public authService: AuthProvider,  private alertCtrl: AlertController,
    ) {
      if (localStorage.token !=''){  
        this.authService.userconnecte().then((data)=>{
           this.membre=data["user"];
           this.user.id = this.membre.id;
          
          })
         }
  }

  public modifier() {
    
    this.authService.modifier(this.user,this.user.id).then(success => {
      if (success) {
        
        this.createSuccess = true;
        this.showPopup("","opération réussie");
        this.user.email ="";
        this.user.password ="";
      } else {
        this.showPopup("Erreur", "Probleme de creation de compte.");
        
      }
    },
      error => {
        this.showPopup("Erreur", error);
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
