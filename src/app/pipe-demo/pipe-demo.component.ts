import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.less']
})
export class PipeDemoComponent implements OnInit {

  sampleText: string;
  itemPrice: number = 5.50;
  currentDate = Date.now();
  numDateFormat = 1478496544151;
  getYear = 'Tue Dec 12 2018 11:20:18 GMT+0530';
  getTime = 'Wed Jan 20 2019 12:20:18 GMT+0530';
  numA: number = 0.349;
  numB: number = 2.4595;
  myNum1: number = 7.4364646;
  myNum2: number = 0.9;
  customText:string ='This pipe will calculate the number of words in a statement';
  constructor() { }

  ngOnInit() {
    this.sampleText = 'I am RandoM casing TEXT';
  }

}
