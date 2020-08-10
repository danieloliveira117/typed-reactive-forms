import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStackFormsComponent } from './ng-stack-forms.component';

describe('NgStackFormsComponent', () => {
  let component: NgStackFormsComponent;
  let fixture: ComponentFixture<NgStackFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStackFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStackFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
