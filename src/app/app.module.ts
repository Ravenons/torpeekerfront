import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { ResultComponent } from './result.component';
import { AppRoutingModule } from './app-routing.module';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }