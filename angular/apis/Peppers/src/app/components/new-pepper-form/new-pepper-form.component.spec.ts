import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPepperFormComponent } from './new-pepper-form.component';

describe('NewPepperFormComponent', () => {
  let component: NewPepperFormComponent;
  let fixture: ComponentFixture<NewPepperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPepperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPepperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
