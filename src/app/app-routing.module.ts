import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'messages', component: MessageComponent, outlet: 'message' },
  { path: 'movie-reviews', loadChildren: './movies/movies.module#MoviesModule' },
  { path: '**', component: WelcomeComponent }
];
//,{preloadingStrategy:PreloadAllModules})
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
