import {Component} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
   templateUrl: 'camera.html'
})
export class CameraPage {
   cameraData: string;

   constructor(private camera: Camera) { }

   openCamera(){
      const options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
        this.cameraData = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
   }

   openLibrary(){
      const options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
        this.cameraData = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
   }
}
