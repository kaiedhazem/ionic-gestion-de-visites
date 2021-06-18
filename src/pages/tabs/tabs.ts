import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import {  NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RegisterPage } from '../register/register';
import {ListePage} from '../liste/liste';
import {ModifierPage} from '../modifier/modifier';
import { CalendrierPage} from '../calendrier/calendrier';
import { DetailscalendarPage } from '../detailscalendar/detailscalendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ModifierPage;
  tab3Root = ListePage;
  tab4Root= LoginPage;
  tab5Root= RegisterPage;
  tab6Root= CalendrierPage;
  tab7Root= DetailscalendarPage;
  user : any;
  role : string;
  constructor(public navCtrl: NavController,public authService:AuthProvider) {
    if (localStorage.token !=''){
    this.authService.userconnecte().then((data)=>{
           this.user=data["user"];
           this.role = this.user.role;
          })
        }
  }
  myLogOut(){
    this.authService.logout();
    this.navCtrl.push(LoginPage);
  }
}

