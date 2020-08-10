import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../shared/models/user.model';
import { AddressModel } from '../../../shared/models/address.model';
import { SkillModel } from '../../../shared/models/skill.model';

import { FormBuilder, Validators } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';

@Component({
  selector: 'rxweb-types-root',
  templateUrl: './rxweb-types.component.html',
})
export class RxwebTypesComponent implements OnInit {
  formGroup: IFormGroup<UserModel>;
  formBuilder: IFormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.createForm();

    // this.tests();
  }

  submit(): void {
    console.log('VALID:', this.formGroup.valid);
    console.log(this.formGroup.value);
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group<UserModel>({
      firstName: ['Daniel', [Validators.required]],
      address: this.formBuilder.group<AddressModel>({
        countryName: ['', Validators.required],
      }),
      skills: this.formBuilder.array<SkillModel>([
        this.formBuilder.group<SkillModel>({
          name: 'test',
        }),
      ]),
    });
  }

  // private tests(): void {
  //   this.formGroup.addControl('lastName', new FormControl('abc'));
  //   this.formGroup.patchValue({ lastName: 'Gates' });
  //   this.formGroup.registerControl('lastName', new FormControl('Gates'));
  //   this.formGroup.removeControl('lastName');
  //   this.formGroup.reset({ lastName: 'Gates' });
  //   this.formGroup.setControl('lastName', new FormControl('abc'));
  //   this.formGroup.setValue({ lastName: 'Gates' });
  //   this.formGroup.get('lastName');
  //   this.formGroup.getError('lastName');
  //
  //   const UserModelFormGroupValue: AddressModel = this.formGroup.value;
  //
  //   this.formGroup.contains('fakeControl');
  //
  //   const UserModel: AddressModel = this.formGroup.getRawValue();
  //
  //   // FormControl
  //
  //   this.formGroup.controls.fakeControl;
  //
  //   this.formGroup.controls.firstName.valueChanges.subscribe((value) => {
  //     const fakeValue: Date = value;
  //   });
  //
  //   this.formGroup.controls.firstName.statusChanges.subscribe((status) => {
  //     if (status === 'Fake') {
  //     }
  //   });
  //
  //   const controlValue: Date = this.formGroup.controls.firstName.value;
  //
  //   this.formGroup.controls.firstName.setValue(new Date());
  //
  //   this.formGroup.controls.firstName.patchValue(new Date());
  //
  //   this.formGroup.controls.firstName.reset(new Date());
  //
  //   // Nested FormGroup
  //
  //   const addressFormGroup: FormGroup<AddressModel, ValidatorsModel> = this.formGroup.controls.address;
  //
  //   addressFormGroup.controls.countryName.setValue(new Date());
  //
  //   // Nested FormArray
  //   const skillFormArray = this.formGroup.controls.skills;
  //
  //   const rawValue: AddressModel[] = skillFormArray.getRawValue();
  //
  //   skillFormArray.insert(
  //     0,
  //     this.formBuilder.group<AddressModel>({ countryName: [''] })
  //   );
  //
  //   skillFormArray.push(
  //     this.formBuilder.group<AddressModel>({ countryName: [''] })
  //   );
  //
  //   skillFormArray.setControl(
  //     0,
  //     this.formBuilder.group<AddressModel>({ countryName: [''] })
  //   );
  //
  //   const formArrayValue: AddressModel[] = skillFormArray.value;
  //
  //   skillFormArray.valueChanges.subscribe((skills) => {
  //     const values: AddressModel[] = skills;
  //   });
  //
  //   skillFormArray.reset([
  //     {
  //       name: new Date(),
  //     },
  //   ]);
  // }
}
