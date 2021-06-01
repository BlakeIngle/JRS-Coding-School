import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepperCardComponent } from './pepper-card.component';

describe('PepperCardComponent', () => {
  let component: PepperCardComponent;
  let fixture: ComponentFixture<PepperCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepperCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PepperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
