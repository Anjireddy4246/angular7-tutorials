import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.less']
})
export class PipeDemoComponent implements OnInit {

  sampleText = 'I AM a ranDom TexT';
  itemPrice= 100;

  constructor() { }

  ngOnInit() {

  }

}
