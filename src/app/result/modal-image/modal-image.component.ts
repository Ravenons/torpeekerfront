import { Component, Input } from '@angular/core';

@Component({
  selector: 'tp-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: [ './modal-image.component.css' ],
})
export class ModalImageComponent {

  imageSource: string;

  @Input()
  set imageBase64(imageBase64: string) {
    if (imageBase64) {
      this.imageSource = 'data:image/png;base64,' + imageBase64;
    } else {
      this.imageSource = null;
    }
  }
}
