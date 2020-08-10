import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgneatReactiveFormsComponent } from './ngneat-reactive-forms.component';

describe('NgneatReactiveFormsComponent', () => {
  let component: NgneatReactiveFormsComponent;
  let fixture: ComponentFixture<NgneatReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgneatReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgneatReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
