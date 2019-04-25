import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.less']
})
export class MovieFormComponent implements OnInit {
  @Output() movieCreated = new EventEmitter<Movie>();
  constructor() { }

  ngOnInit() {
  }

  addMovie(movieName: string, review: string) {
    this.movieCreated.emit(new Movie(movieName, review));
  }

}
