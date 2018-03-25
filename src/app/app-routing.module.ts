import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntryModule } from './entry/entry.module';
import { ResultModule } from './result/result.module';

import { EntryComponent } from './entry/entry/entry.component';
import { ResultComponent } from './result/result/result.component';

const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'visit/:ref', component: ResultComponent }
];

@NgModule({
  imports: [
    // Feature modules are loaded for the compiler to know (not lazy-loading)
    EntryModule,
    ResultModule,
    RouterModule.forRoot(routes),
 ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
