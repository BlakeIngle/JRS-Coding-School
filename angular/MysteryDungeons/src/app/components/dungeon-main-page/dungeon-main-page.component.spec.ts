import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonMainPageComponent } from './dungeon-main-page.component';

describe('DungeonMainPageComponent', () => {
  let component: DungeonMainPageComponent;
  let fixture: ComponentFixture<DungeonMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
