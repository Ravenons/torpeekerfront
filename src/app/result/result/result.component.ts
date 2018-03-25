import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';
import polling from 'rx-polling';

import { BackendService } from '../../backend.service';
import { VisitResult } from '../../visit-result';

@Component({
  selector: 'tp-result',
  templateUrl: './result.component.html',
  styleUrls: [ './result.component.css' ],
})
export class ResultComponent implements OnInit {

  imageBase64Result: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private backend: BackendService) { }

  ngOnInit() {

    // Not the nicest way (polling), but works for now
    this.subscription = this.route.paramMap.flatMap(params => {
      const ref = params.get('ref');
      return polling(this.backend.visitResult(ref),
                     { interval: 1000 });
    }).subscribe(visitResult => {
      if (visitResult.is_ready) {
        this.imageBase64Result = visitResult.screenshot;
        this.subscription.unsubscribe();
      }
    });
  }
}
