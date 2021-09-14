import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepperAppComponent } from './pepper-app.component';

describe('PepperAppComponent', () => {
  let component: PepperAppComponent;
  let fixture: ComponentFixture<PepperAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepperAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PepperAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
