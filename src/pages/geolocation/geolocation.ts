import {Component, ViewChild, ElementRef} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation';
import {NativeGeocoder, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';

declare var google;
 
@Component({
   templateUrl: 'geolocation.html'
})
export class GeolocationPage { 
   map: any;
   infoWindow: any;
   alamat: string;

   @ViewChild('map') mapElement: ElementRef;

   constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) { }

  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){ 
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
 	    //Menampilkan peta
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      //Menambah marker
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        draggable: true,
        position: this.map.getCenter()
      });
     
      //Membuat info window
      this.infoWindow = new google.maps.InfoWindow({
        content: "Information"
      });

      //Menampilkan info window ketika marker diklik
      google.maps.event.addListener(marker, 'click', () => {
        this.infoWindow.open(this.map, marker);
      });
     
      this.nativeGeocoder.reverseGeocode(position.coords.latitude, position.coords.longitude)
        .then((result: NativeGeocoderReverseResult) =>{
          
          let jln = result.thoroughfare;
          let desa = result.subLocality;
          let kec = result.locality;
          let kab = result.subAdministrativeArea;

          this.alamat = jln+", "+desa+", "+kec+", "+kab;
        })
        .catch((error: any) => console.log(error));
        
    }, (err) => {
      console.log(err);
    });
 
  }
}
