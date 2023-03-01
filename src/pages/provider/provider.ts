import { Component } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';

@Component({
   templateUrl: 'provider.html'
})
export class ProviderPage { 
  anggota: any;

  constructor(
    private postPvdr: PostProvider
  ) { }

  ionViewDidLoad(){
    let body = {
      user : 'faqih',
      pass : 'Sasd91230WsdfD'
    }

    this.postPvdr.postData(body, 'member.php').subscribe(data => {
      console.log(data);
      this.anggota = data.result;
    });
  }

}