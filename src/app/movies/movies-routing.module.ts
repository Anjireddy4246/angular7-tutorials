import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieratingsComponent } from './movieratings/movieratings.component';
import { MoviecommentsComponent } from './moviecomments/moviecomments.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', component: MovieslistComponent, canActivate: [AuthGuard] },
    {
        path: ':id/:movieName/:preview', component: MovieDetailsComponent,
        children: [{ path: 'ratings', component: MovieratingsComponent },
        { path: 'comments', component: MoviecommentsComponent }]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule { }