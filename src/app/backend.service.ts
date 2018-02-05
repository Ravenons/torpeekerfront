import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { VisitResult } from './visit-result';

@Injectable()
export class BackendService {

  visitUrl(url: string): Observable<VisitResult> { 
    const visitResult = new VisitResult('12345');
    return of(visitResult);
  }
}
