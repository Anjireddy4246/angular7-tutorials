import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.less']
})
export class MovieslistComponent implements OnInit {
  movies: Movie[] = [];
  userName: string = 'NextSphere';
  constructor() { }
  ngOnInit() {
    this.movies = [
      new Movie('Thor', 'Good Movie. Mjust watch in your lifetime'),
      new Movie('Gladiator', 'Good Movie. Mjust watch in your lifetime'),
      new Movie('EndGame', 'Good Movie. Mjust watch in your lifetime')
    ];
  }

  saveMovie(movie) {
    this.movies.unshift(movie);
  }
}
