import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeppersListComponent } from './peppers-list.component';

describe('PeppersListComponent', () => {
  let component: PeppersListComponent;
  let fixture: ComponentFixture<PeppersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeppersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeppersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
