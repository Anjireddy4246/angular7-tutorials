import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.less']
})
export class MovieDetailsComponent implements OnInit {
  id: number;
  movieName: string;
  review: string;
  constructor(private route: ActivatedRoute) {

  }
  logParams() {
    //using snapshot
    // this.id = +this.route.snapshot.paramMap.get('id');
    // this.movieName = this.route.snapshot.paramMap.get('movieName');
    // this.review = this.route.snapshot.paramMap.get('review');
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.movieName = params.get('movieName');
      this.review = params.get('review')
    })
  }
  ngOnInit() {
    this.logParams();
  }

}
