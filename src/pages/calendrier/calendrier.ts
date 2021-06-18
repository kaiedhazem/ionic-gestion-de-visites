import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { DetailscalendarPage } from '../detailscalendar/detailscalendar';
@IonicPage()
@Component({
  selector: 'page-calendrier',
  templateUrl: 'calendrier.html',
})
export class CalendrierPage {
  calendars = [];
  constructor(public navCtrl: NavController, public navParams: NavParams ,private calendar: Calendar, private plt: Platform) {
    this.plt.ready().then(() => {
      this.calendar.listCalendars().then(data => {
        this.calendars = data;
      });
    })
  }

  addEvent(cal) {
    let date = new Date();
    let options = { calendarId: cal.id, calendarName: cal.name, url: 'https://ndi-photo.herokuapp.com', firstReminderMinutes: 15 };
 
    this.calendar.createEventInteractivelyWithOptions('Nouveau visite', 'Beni khalled', 'visite sur terrain', date, date, options).then(res => {
    }, err => {
      console.log('err: ', err);
    });
  }
 
  openCal(cal) {
    this.navCtrl.push(DetailscalendarPage, { name: cal.name })
  }
}
