import { NgModule } from '@angular/core';
import { NgneatReactiveFormsComponent } from './ngneat-reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgneatReactiveFormsRoutingModule } from './ngneat-reactive-forms-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgneatReactiveFormsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgneatReactiveFormsRoutingModule,
  ],
  exports: [NgneatReactiveFormsComponent],
})
export class NgneatReactiveFormsModule {}
