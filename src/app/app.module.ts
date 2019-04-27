import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { WordcountPipe } from './wordcount.pipe';
import { RenderHtmlComponent } from './render-html/render-html.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ModelDrivenFbFormComponent } from './model-driven-fb-form/model-driven-fb-form.component';
import { ReactiveExtensionsComponent } from './reactive-extensions/reactive-extensions.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './httpinterceptors';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    WordcountPipe,
    RenderHtmlComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ModelDrivenFbFormComponent,
    ReactiveExtensionsComponent,
    WelcomeComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
