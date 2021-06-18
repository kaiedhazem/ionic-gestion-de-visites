import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform  } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
 
/**
 * Generated class for the DetailscalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailscalendar',
  templateUrl: 'detailscalendar.html',
})
export class DetailscalendarPage {

  calName = '';
  events = [];
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar, private plt: Platform) {
    this.calName = navParams.get('name');
 
    if (this.plt.is('ios')) {
      this.calendar.findAllEventsInNamedCalendar(this.calName).then(data => {
        this.events = data;
      });
    } else if (this.plt.is('android')) {
      let start = new Date();
      let end = new Date();
      end.setDate(end.getDate() + 31);
 
      this.calendar.listEventsInRange(start, end).then(data => {
        this.events = data;
      });
    }
  }
 
}


