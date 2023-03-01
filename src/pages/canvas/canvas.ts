import { Component, ViewChild, Renderer} from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'canvas.html'
})
export class CanvasPage {
   @ViewChild('coretan') canvas: any;
   lastX: any;
   lastY: any;
   canvasElement: any;
   ctx: any;

  constructor(public platform: Platform, public renderer: Renderer) {}

  ngAfterViewInit(){
    this.canvasElement = this.canvas.nativeElement;
    this.ctx = this.canvasElement.getContext('2d');

    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
  }

  handleStart(ev){
    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }

  handleMove(ev){
    let currentX = ev.touches[0].pageX;
    let currentY = ev.touches[0].pageY;

    this.ctx.beginPath();
    this.ctx.lineJoin = "round";
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(currentX, currentY);
    this.ctx.closePath();
    this.ctx.strokeStyle = "#000";
    this.ctx.lineWidth = 5;
    this.ctx.stroke();

    this.lastX = currentX;
    this.lastY = currentY;
  }
}
