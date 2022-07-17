import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResistanceComponent } from './calculator/resistance/resistance.component';

const routes: Routes = [
  { path: 'calculator/resistance', component: ResistanceComponent },
  { path: '**', redirectTo: 'calculator/resistance' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
