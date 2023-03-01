import {Component} from '@angular/core';
import {SocialSharing} from '@ionic-native/social-sharing';

@Component({
   templateUrl: 'social.html'
})
export class SocialPage { 
   pesan: string = "Ini di-share dari aplikasiku";
   subjek: string = "Test Share";
   gambar: string = "assets/thumbnail-duckling-1.jpg";
   link: string = "";
   email: string = "daffa@gmail.com";

   constructor( public socialSharing: SocialSharing){
     
   }

   shareGeneral(){
      this.socialSharing.share(this.pesan, this.subjek, this.gambar, this.link);
   }

   shareWhatsApp(){
      this.socialSharing.shareViaWhatsApp(this.pesan, this.gambar, this.link);
   }

   shareTwitter(){
      this.socialSharing.shareViaTwitter(this.pesan, this.gambar, this.link);
   }

   shareFacebook(){
      this.socialSharing.shareViaFacebook(this.pesan, this.gambar, this.link);
   }

   shareInstagram(){
      this.socialSharing.shareViaInstagram(this.pesan, this.gambar);
   }
/*
   shareEmail(){
      this.socialSharing.shareViaEmail(this.pesan, this.subjek, this.email, null,  null, this.gambar)
   }*/
}
