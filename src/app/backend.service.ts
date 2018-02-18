import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { VisitTicket } from './visit-ticket';
import { environment } from '../environments/environment';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  visitUrl(url: string): Observable<VisitTicket> { 
    return this.http.post<VisitTicket>(environment.VISIT_TICKET,
                                       { 'url': url });
  }

/*
  visitResult(visitTicket: VisitTicket): Observable<VisitResult> {
    const visitResult = new VisitResult('');
    return of(visitResult);
  }
*/
}
