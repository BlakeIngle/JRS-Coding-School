import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberShopAppComponent } from './barber-shop-app.component';

describe('BarberShopAppComponent', () => {
  let component: BarberShopAppComponent;
  let fixture: ComponentFixture<BarberShopAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberShopAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberShopAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
