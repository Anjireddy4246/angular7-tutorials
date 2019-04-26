import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Angular 7 Training';

  constructor(private router: Router) {

  }

  navigateToMoviewsModule() {
    //this.router.navigate(['/movie-reviews']);
    //this.router.navigateByUrl('/movie-reviews');
  }
}
