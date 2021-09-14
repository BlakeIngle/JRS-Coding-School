import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgedItemListComponent } from './budged-item-list.component';

describe('BudgedItemListComponent', () => {
  let component: BudgedItemListComponent;
  let fixture: ComponentFixture<BudgedItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgedItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgedItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
