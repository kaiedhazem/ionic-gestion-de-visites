import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';
import { Geolocation } from '@ionic-native/geolocation';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import { ImagePicker } from '@ionic-native/image-picker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[DatePipe]
})
export class HomePage {
 
rootPage:any = TabsPage;
capturedSnapURL= null;
imageResponse: any;
  latitude : any;
  longitude :any;
  typeS:'' ;
  typeN:'' ;
  description:'';
  Adresse:'';
  operateur:'';
  membre : any;
  name : any;
  date=new Date();
  latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  cameraOptions: CameraOptions = {
    mediaType: this.camera.MediaType.PICTURE,
    destinationType: this.camera.DestinationType.FILE_URI,
   saveToPhotoAlbum: true,

  }
  constructor( public navCtrl: NavController,private camera: Camera,private emailcomposer: EmailComposer , private geolocation: Geolocation,public authService:AuthProvider,
    private imagePicker: ImagePicker,public datepipe: DatePipe) {
      if (localStorage.token !=''){  
        this.authService.userconnecte().then((data)=>{
           this.membre=data["user"];
           this.name = this.membre.name;
          
          })
         }
    }

  public capturedPicture(){
    const options : CameraOptions = {
     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
     destinationType: this.camera.DestinationType.FILE_URI,      
    }
  
    this.imageResponse = [];
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.imageResponse.push(results[i]);
          
      }
    }, (err) => { });
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude= resp.coords.latitude;
       this.longitude= resp.coords.longitude;
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }
  public getPicture() {  
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
       let base64Image = 'data:image/jpeg;base64,' + imageData; 
          this.capturedSnapURL = imageData;   
    });
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude= resp.coords.latitude;
       this.longitude= resp.coords.longitude;
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }  
Send(){
  let email = {
    to: 'ndi.visite.technique@gmail.com',
    
   
    attachments: [
    
   this.imageResponse[0],
   this.imageResponse[1],
   this.imageResponse[2],
   this.imageResponse[3],
   this.imageResponse[5],
   this.imageResponse[6],
   this.imageResponse[7],
   this.imageResponse[8],
   this.imageResponse[9],
   this.imageResponse[10],
   this.imageResponse[11],
   this.imageResponse[12],
   this.imageResponse[13],
   this.imageResponse[14],
   this.imageResponse[15],
   this.capturedSnapURL,
   
    ],
    subject: 'NDIphoto compte rendu de la visite technique',
    body: 
    'type de site=   ' + this.typeS + '\n'   +                                                                               

  ' \nintervention de type =   ' + this.typeN + '\n'+ 

    '  date de la visite technique = '  + this.latest_date+ '\n'+ 

    ' opérateur= '+ this.operateur + '\n'+ 
    'Adresse= '+ this.Adresse  + '\n' 
    +
    '  localisation: Latitude = '+ this.latitude +'   Longitude = '+ this.longitude 
    + '    description: ' + this.description ,
  
    isHtml: true
    
  }
  
  // Send a text message using default options
  this.emailcomposer.open(email);
  
}
myLogOut(){
  this.authService.logout();
  this.rootPage=LoginPage;
  this.navCtrl.push(LoginPage);
  location.reload();
}
  }

 