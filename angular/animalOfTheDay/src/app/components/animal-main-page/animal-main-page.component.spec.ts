import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalMainPageComponent } from './animal-main-page.component';

describe('AnimalMainPageComponent', () => {
  let component: AnimalMainPageComponent;
  let fixture: ComponentFixture<AnimalMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
