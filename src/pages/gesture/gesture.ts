import {Component} from '@angular/core';

@Component({
  templateUrl: 'gesture.html'
})
export class Gesture {

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;

  constructor() {}

  pressEvent(e) {
    this.press++
  }

  panEvent(e) {
    this.pan++
  }

  swipeEvent(e) {
    this.swipe++
  }
  
  tapEvent(e) {
    this.tap++
  }

}
