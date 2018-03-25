import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntryComponent } from './entry/entry/entry.component';
import { ResultComponent } from './result/result/result.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'visit/:ref', component: ResultComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
