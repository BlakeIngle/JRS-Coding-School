import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberPageComponent } from './barber-page.component';

describe('BarberPageComponent', () => {
  let component: BarberPageComponent;
  let fixture: ComponentFixture<BarberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
