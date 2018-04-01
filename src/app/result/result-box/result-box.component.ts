import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'tp-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: [ './result-box.component.css' ],
})
export class ResultBoxComponent {

  private _imageSrc: string;

  @Input() 
  set imageSrc(imageSrc: string) {
    this._imageSrc = (imageSrc === null ?
                      this.placeholderImageURL : imageSrc);
  }
  get imageSrc(): string {
    return this._imageSrc;
  } 

  @Output() onComponentReady = new EventEmitter<any>();

  errorImageURL: string = "/assets/images/error.png";
  placeholderImageURL: string = "/assets/images/placeholder.jpg";

  componentReady: boolean = false;

  constructor(@Inject(DOCUMENT) private document: any) { }

  imageSuccess() {
    if (!this.componentReady) {
      this.componentReady = true;
      this.onComponentReady.emit(null);
    }
  }

  imageError() {
    if (this.imageSrc !== this.errorImageURL) {
      this.imageSrc = this.errorImageURL;
    } else {
      // We tried to load error image, but failed (oh the irony!), so be it
      if (!this.componentReady) {
        this.componentReady = true;
        this.onComponentReady.emit(null);
      }
    }
  }

  goToImage(): void {
    this.document.location.href = this.imageSrc;
  }
}
