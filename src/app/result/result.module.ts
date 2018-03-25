import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultComponent } from './result/result.component';
import { ModalImageComponent } from './modal-image/modal-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ResultComponent,
  ],
  declarations: [
    ResultComponent,
    ModalImageComponent,
  ],
})
export class ResultModule { }
