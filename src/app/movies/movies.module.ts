import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MovieComponent } from './movie/movie.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { CardHoverDirective } from './card-hover.directive';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieratingsComponent } from './movieratings/movieratings.component';
import { MoviecommentsComponent } from './moviecomments/moviecomments.component';

@NgModule({
  declarations: [MovieslistComponent, MovieComponent, MovieFormComponent, CardHoverDirective, MovieDetailsComponent, MovieratingsComponent, MoviecommentsComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule
  ],
  exports: [MovieslistComponent, CardHoverDirective]
})
export class MoviesModule { }
