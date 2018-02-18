import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from './backend.service';
import { VisitTicket } from './visit-ticket';

@Component({
  selector: 'tp-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ],
})
export class MainComponent {

  constructor(private router: Router,
              private backend: BackendService) { }
    
  setUrl(url: string): void {
    this.backend.visitUrl(url)
      .subscribe(visitTicket => this.navigateToResult(visitTicket.ref));
  }
  
  navigateToResult(ref: string): void {
    this.router.navigateByUrl('/visit/' + ref);
  }
}
