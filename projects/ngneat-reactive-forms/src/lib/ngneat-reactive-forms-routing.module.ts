import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgneatReactiveFormsComponent } from './ngneat-reactive-forms.component';

const routes: Routes = [
  {
    path: '',
    component: NgneatReactiveFormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgneatReactiveFormsRoutingModule {}
