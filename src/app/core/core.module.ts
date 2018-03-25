import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BackendService } from './backend.service';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    BackendService,
  ],
})
export class CoreModule { }
