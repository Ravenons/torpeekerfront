import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultComponent } from './result/result.component';
import { ResultBoxComponent } from './result-box/result-box.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ResultComponent,
    ResultBoxComponent,
  ],
})
export class ResultModule { }
