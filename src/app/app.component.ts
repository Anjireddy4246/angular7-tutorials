import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Angular 7 Training';
  showMessagesOutlet=false;
  constructor(private router: Router) {

  }

  naviageToMessagesOutlet() {
    this.router.navigate([{ outlets: { message: ['messages'] } }]);
    this.showMessagesOutlet = true;
  }

  hideMessageoutlet(){
    this.router.navigate([{ outlets: { message:null } }]);
    this.showMessagesOutlet = false;
  }

  navigateToMoviewsModule() {
    this.router.navigate(['/movie-reviews']);
    //this.router.navigateByUrl('/movie-reviews');
  }
}
