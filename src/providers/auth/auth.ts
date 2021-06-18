
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map' ;
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public token:any;
  constructor(public storage:Storage ,public http: Http) {
    console.log('Hello AuthProvider Provider');
  }
  login(credentials){
    return new Promise((resolve, reject) => {
        let headers = new Headers();

    headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('Content-type','application/json');
       headers.append('X-Requested-With','XMLHttpRequest');
        this.http.post('https://ndi-photo.herokuapp.com/api/auth/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            let data = res.json();
            this.token = data.token;
            localStorage.setItem('token',data.access_token);

            resolve(data);
   }, (err) => {
            reject(err);

          });  });

  }
  checkAuthentication(){

    return new Promise((resolve, reject) => {


      resolve(localStorage.getItem('token'))


    })




  }
userconnecte(){
  return new Promise((resolve, reject) => {

    let value = localStorage.getItem('token')
           let headers = new Headers();
     headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Accept','application/json');
       headers.append('Authorization','Bearer '+value);
         this.http.get('https://ndi-photo.herokuapp.com/api/userconnecte',{headers: headers})
         .map(res=>res.json())
         .subscribe(data => {
             resolve(data);
    }, (err) => {
             reject(err);
 
           });  });
}
membres(){
  return new Promise((resolve, reject) => {

    let value = localStorage.getItem('token')
           let headers = new Headers();
     headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Accept','application/json');
       headers.append('Authorization','Bearer '+value);
         this.http.get('https://ndi-photo.herokuapp.com/api/membres',{headers: headers})
         .map(res=>res.json())
         .subscribe(data => {
             resolve(data);
    }, (err) => {
             reject(err);
 
           });  });
}
  register(credentials){
    return new Promise((resolve, reject) => {
        let headers = new Headers();

    headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('Content-type','application/json');
       headers.append('X-Requested-With','XMLHttpRequest');
        this.http.post('https://ndi-photo.herokuapp.com/api/auth/register', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            let data = res.json();


            resolve(data);
   }, (err) => {
            reject(err);

          });  });

  }
  modifier(credentials,id){
    return new Promise((resolve, reject) => {
        let headers = new Headers();

    headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('Content-type','application/json');
       headers.append('X-Requested-With','XMLHttpRequest');
        this.http.post('https://ndi-photo.herokuapp.com/api/modifier/'+id, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            let data = res.json();


            resolve(data);
   }, (err) => {
            reject(err);

          });  });

  }
  supprimer(id){
    return new Promise((resolve, reject) => {
        let headers = new Headers();

    headers.append('Access-Control-Allow-Origin' , '*');
       headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('Content-type','application/json');
       headers.append('X-Requested-With','XMLHttpRequest');
        this.http.delete('https://ndi-photo.herokuapp.com/api/users/'+id, {headers: headers})
          .subscribe(res => {
            let data = res.json();


            resolve(data);
   }, (err) => {
            reject(err);

          });  });

  }
  logout(){

    localStorage.setItem('token','');

   }




}
