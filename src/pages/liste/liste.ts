import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the ListePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste',
  templateUrl: 'liste.html',
})
export class ListePage {
  createSuccess = false;
membres : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService:AuthProvider,  private alertCtrl: AlertController,) {
    if (localStorage.token !=''){  
      this.authService.membres().then((data)=>{
         this.membres=data["membres"];
        
        })
       }
  }
  supprimer(id){
    this.authService.supprimer(id).then(success => {
      if (success) {
        
        this.createSuccess = true;
        this.showPopup("","utilisateur supprimé");
        this.authService.membres().then((data)=>{
          this.membres=data["membres"];
         
         })
        
      } else {
        this.showPopup("Erreur", "Probleme de suppression de compte.");
        
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
