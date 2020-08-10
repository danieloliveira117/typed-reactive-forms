import { Routes, RouterModule } from '@angular/router';
import { RxwebTypesComponent } from './rxweb-types.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: RxwebTypesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxwebTypesRoutingModule {}
