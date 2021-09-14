import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSuperFormComponent } from './new-super-form.component';

describe('NewSuperFormComponent', () => {
  let component: NewSuperFormComponent;
  let fixture: ComponentFixture<NewSuperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSuperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSuperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
