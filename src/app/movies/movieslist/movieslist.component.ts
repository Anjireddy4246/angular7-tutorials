import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.less']
})
export class MovieslistComponent implements OnInit {
  movies: IMovie[] = [];
  userName: string = 'NextSphere';
  constructor(private moviesService: MoviesService) { }
  ngOnInit() {
    // this.movies = [
    //   new Movie(1, 'Thor', 'Good Movie. Mjust watch in your lifetime'),
    //   new Movie(2, 'Gladiator', 'Good Movie. Mjust watch in your lifetime'),
    //   new Movie(3, 'EndGame', 'Good Movie. Mjust watch in your lifetime')
    // ];
    this.moviesService.getMovies().subscribe((products) => {
      this.movies = products;
    })
  }

  saveMovie(movie) {
    this.movies.unshift(movie);
  }
}
