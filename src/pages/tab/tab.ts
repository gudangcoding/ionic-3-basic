import {Component} from '@angular/core';

@Component({
    templateUrl: 'tab-one.html'
})
export class TabPageOne { }

@Component({
    templateUrl: 'tab-two.html'
})
export class TabPageTwo { }

@Component({
    templateUrl: 'tab-three.html'
})
export class TabPageThree{ }

/* ----- Text Tab -----
@Component({
  template: `
    <ion-tabs>
      <ion-tab tabTitle="Music" [root]="tabOne"></ion-tab>
      <ion-tab tabTitle="Movies" [root]="tabTwo"></ion-tab>
      <ion-tab tabTitle="Games" [root]="tabThree"></ion-tab>
    </ion-tabs>
`})
*/

/* ----- Icon & Text Tab -----
@Component({
  template: 
      `<ion-tabs>
        <ion-tab tabIcon="contact" [root]="tabOne"></ion-tab>
        <ion-tab tabIcon="compass" [root]="tabTwo"></ion-tab>
        <ion-tab tabIcon="analytics" [root]="tabThree"></ion-tab>
      </ion-tabs>`
})
*/

/* ----- Badge on Tab -----
@Component({
  template: `
      <ion-tabs>
        <ion-tab tabIcon="contact" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>
        <ion-tab tabIcon="compass" [root]="tabTwo" tabBadge="12" tabBadgeStyle="danger"></ion-tab>
        <ion-tab tabIcon="analytics" [root]="tabThree"></ion-tab>
      </ion-tabs>
`})
*/

@Component({
  template: `
      <ion-tabs>
        <ion-tab tabIcon="contact" [root]="tabOne" tabBadge="3" tabBadgeStyle="danger"></ion-tab>
        <ion-tab tabIcon="compass" [root]="tabTwo" tabBadge="12" tabBadgeStyle="danger"></ion-tab>
        <ion-tab tabIcon="analytics" [root]="tabThree"></ion-tab>
      </ion-tabs>
`})

export class Tab {
  tabOne = TabPageOne;
  tabTwo = TabPageTwo;
  tabThree = TabPageThree;
}
