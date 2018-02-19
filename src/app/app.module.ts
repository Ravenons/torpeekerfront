import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { ResultComponent } from './result.component';
import { ModalImageComponent } from './modal-image.component';
import { AppRoutingModule } from './app-routing.module';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultComponent,
    ModalImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule { }
