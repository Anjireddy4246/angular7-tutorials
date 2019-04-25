import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render-html',
  templateUrl: './render-html.component.html',
  styleUrls: ['./render-html.component.less']
})
export class RenderHtmlComponent implements OnInit {
  showNgIf = true;
  showNgFor = true;
  showNgSwicth = true;
  showNgStyle = true;
  showNgClass = true;
  userLoggedIn = true;
  show_nonBindable = true;
  constructor() { }

  ngOnInit() {
  }

  people: any[] = [
    { "name": "Anji  Reddy", "country": "IND" },
    { "name": "Anil  Kumar", "country": "IND" },
    { "name": "Swetha  challa", "country": "USA" },
    { "name": "Aaradhya  Sree", "country": "USA" },
    { "name": "John  Williams", "country": "RUS" },
    { "name": "Saleem", "country": "PAK" }
  ];

  getColor(country: string) {
    switch (country) {
      case 'IND':
        return 'green';
      case 'USA':
        return 'blue';
      case 'RUS':
        return 'yellow';
      default:
        return 'red';
    }
  }


  getCssClass(country: string) {
    switch (country) {
      case 'IND':
        return 'text-success';
      case 'USA':
        return 'text-primary';
      case 'RUS':
        return 'text-warning';
      default:
        return 'text-danger';
    }
  }

}
