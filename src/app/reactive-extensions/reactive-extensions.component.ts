import { Component, OnInit } from '@angular/core';
import { range, interval } from 'rxjs';

@Component({
  selector: 'app-reactive-extensions',
  templateUrl: './reactive-extensions.component.html',
  styleUrls: ['./reactive-extensions.component.less']
})
export class ReactiveExtensionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.intervalEx();
  }
  //method name = (params list) => {method body};
  rangeEx = () => { range(1, 10).subscribe(i => console.log(i)) };
  intervalEx = () =>{ interval(2000).subscribe(i => console.log(i)) };
}
