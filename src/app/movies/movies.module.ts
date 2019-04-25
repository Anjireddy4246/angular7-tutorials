import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MovieComponent } from './movie/movie.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { CardHoverDirective } from './card-hover.directive';

@NgModule({
  declarations: [MovieslistComponent, MovieComponent, MovieFormComponent, CardHoverDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MovieslistComponent,CardHoverDirective]
})
export class MoviesModule { }
