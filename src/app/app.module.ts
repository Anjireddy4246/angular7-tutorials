import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { WordcountPipe } from './wordcount.pipe';
import { RenderHtmlComponent } from './render-html/render-html.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    WordcountPipe,
    RenderHtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
