import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../core/backend.service';
import { VisitTicket } from '../../core/visit-ticket';

@Component({
  selector: 'tp-entry',
  templateUrl: './entry.component.html',
  styleUrls: [ './entry.component.css' ],
})
export class EntryComponent {

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
