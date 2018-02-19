import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { ResultComponent } from './result.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'visit/:ref', component: ResultComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
