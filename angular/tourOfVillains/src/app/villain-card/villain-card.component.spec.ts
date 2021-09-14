import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainCardComponent } from './villain-card.component';

describe('VillainCardComponent', () => {
  let component: VillainCardComponent;
  let fixture: ComponentFixture<VillainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillainCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
