import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.less']
})
export class MovieComponent implements OnInit {
  @Input("movie") movie: Movie;
  constructor() { }

  ngOnInit() {
  }
}
