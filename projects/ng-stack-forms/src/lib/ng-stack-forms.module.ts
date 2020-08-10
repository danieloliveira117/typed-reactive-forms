import { NgModule } from '@angular/core';
import { NgStackFormsComponent } from './ng-stack-forms.component';
import { NgStackFormsModule as FormModule } from '@ng-stack/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgStackFormsRoutingModule } from './ng-stack-forms-routing.module';

@NgModule({
  declarations: [NgStackFormsComponent],
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    NgStackFormsRoutingModule,
  ],
  exports: [NgStackFormsComponent],
})
export class NgStackFormsModule {}
