import { NgModule } from '@angular/core';
import { RxwebTypesComponent } from './rxweb-types.component';
import { RxwebTypesRoutingModule } from './rxweb-types-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RxwebTypesComponent],
  imports: [CommonModule, RxwebTypesRoutingModule, ReactiveFormsModule],
  exports: [RxwebTypesComponent],
})
export class RxwebTypesModule {}
