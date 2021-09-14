import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDataTableComponent } from './covid-data-table.component';

describe('CovidDataTableComponent', () => {
  let component: CovidDataTableComponent;
  let fixture: ComponentFixture<CovidDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
