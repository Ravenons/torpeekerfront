import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { VisitTicket } from './visit-ticket';
import { VisitResult } from './visit-result';

import { environment } from '../../environments/environment';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  visitUrl(url: string): Observable<VisitTicket> { 
    return this.http.post<VisitTicket>(environment.VISIT_TICKET,
                                       { 'url': url });
  }

  visitResult(ref: string): Observable<VisitResult> {
    const url = environment.VISIT_RESULT + ref;
    return this.http.get<VisitResult>(url);
  }
}
