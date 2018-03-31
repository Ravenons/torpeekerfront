import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';
import polling from 'rx-polling';

import { BackendService } from '../../core/backend.service';
import { VisitResult } from '../../core/visit-result';

@Component({
  selector: 'tp-result',
  templateUrl: './result.component.html',
  styleUrls: [ './result.component.css' ],
})
export class ResultComponent implements OnInit, OnDestroy {

  imageResultURL: string = "/assets/images/placeholder.jpg";
  subscription: Subscription;
  isChildReady = false;

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
        this.subscription.unsubscribe();
        this.imageResultURL = visitResult.screenshot;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  childReady() {
    this.isChildReady = true;
  }
}
