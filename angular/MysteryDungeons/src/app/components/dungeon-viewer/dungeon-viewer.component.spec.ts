import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonViewerComponent } from './dungeon-viewer.component';

describe('DungeonViewerComponent', () => {
  let component: DungeonViewerComponent;
  let fixture: ComponentFixture<DungeonViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
