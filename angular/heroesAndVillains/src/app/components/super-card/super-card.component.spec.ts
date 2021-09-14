import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCardComponent } from './super-card.component';

describe('SuperCardComponent', () => {
  let component: SuperCardComponent;
  let fixture: ComponentFixture<SuperCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
