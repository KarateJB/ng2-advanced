import {NgModel} from '@angular/forms';
import { ElementRef, Input, Component, OnInit, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  @ViewChild('input') input: NgModel;
  @Input() titleimg: string;
  @Input() name: string = 'Sky';
  @ContentChild('btn') btn: ElementRef; //Get the parent element

  constructor() { }

  ngOnInit() {
    if(this.btn) {
      console.log(this.btn.nativeElement.innerText);
    }
  }

  getCounter() {
    if(this.btn) {
      console.log(this.btn.nativeElement.innerText);
    }
  }

}
