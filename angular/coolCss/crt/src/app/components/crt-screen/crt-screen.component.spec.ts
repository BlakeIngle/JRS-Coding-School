import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrtScreenComponent } from './crt-screen.component';

describe('CrtScreenComponent', () => {
  let component: CrtScreenComponent;
  let fixture: ComponentFixture<CrtScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrtScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrtScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
