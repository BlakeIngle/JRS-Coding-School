import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepperAdderComponent } from './pepper-adder.component';

describe('PepperAdderComponent', () => {
  let component: PepperAdderComponent;
  let fixture: ComponentFixture<PepperAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepperAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PepperAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
