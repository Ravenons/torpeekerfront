import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'tp-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: [ './result-box.component.css' ],
})
export class ResultBoxComponent {

  @Input() imageSrc: string;
  @Output() onResourcesLoaded = new EventEmitter<any>();

  constructor(@Inject(DOCUMENT) private document: any) { }

  imageLoaded() {
    console.log("jeeee");
    this.onResourcesLoaded.emit(null);
  }

  goToImage(): void {
    this.document.location.href = this.imageSrc;
  }
}
