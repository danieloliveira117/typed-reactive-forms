import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgStackFormsComponent } from './ng-stack-forms.component';

const routes: Routes = [
  {
    path: '',
    component: NgStackFormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgStackFormsRoutingModule {}
