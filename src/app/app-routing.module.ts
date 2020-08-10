import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'rxweb-types',
    loadChildren: () =>
      import('../../projects/rxweb-types/src/lib/rxweb-types.module').then(
        (m) => m.RxwebTypesModule
      ),
  },
  {
    path: 'ng-stack-forms',
    loadChildren: () =>
      import(
        '../../projects/ng-stack-forms/src/lib/ng-stack-forms.module'
      ).then((m) => m.NgStackFormsModule),
  },
  {
    path: '',
    redirectTo: 'rxweb-types',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
