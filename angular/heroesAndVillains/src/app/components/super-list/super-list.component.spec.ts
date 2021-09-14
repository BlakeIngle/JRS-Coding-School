import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperListComponent } from './super-list.component';

describe('SuperListComponent', () => {
  let component: SuperListComponent;
  let fixture: ComponentFixture<SuperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
