import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { EntryModule } from './entry/entry.module';
import { ResultModule } from './result/result.module';

import { BackendService } from './backend.service';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry/entry.component';
import { ResultComponent } from './result/result/result.component';
import { ModalImageComponent } from './result/modal-image/modal-image.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    EntryModule,
    ResultModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule { }
