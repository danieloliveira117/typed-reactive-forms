import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxwebTypesComponent } from './rxweb-types.component';

describe('RxwebTypesComponent', () => {
  let component: RxwebTypesComponent;
  let fixture: ComponentFixture<RxwebTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxwebTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxwebTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
