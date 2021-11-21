import { Component, OnInit } from '@angular/core';
import { Dungeon } from 'src/app/classes/dungeon';
import { DungeonGeneratorService } from 'src/app/services/dungeon-generator.service';

@Component({
  selector: 'dungeon-viewer',
  templateUrl: './dungeon-viewer.component.html',
  styleUrls: ['./dungeon-viewer.component.css']
})
export class DungeonViewerComponent implements OnInit {

  dungeon: Dungeon;
  dHeight: number;
  dWidth: number;

  constructor(private dungeonGeneratorService: DungeonGeneratorService) {
    this.dHeight = 600;
    this.dWidth = 600;
    this.dungeon = new Dungeon(this.dHeight, this.dHeight);
  }

  ngOnInit(): void {

  }

  resetDungeon() {
    this.dungeon = new Dungeon(this.dHeight, this.dWidth);
  }

  makeDrunkardDungeon() {
    this.resetDungeon();
    this.dungeonGeneratorService.drunkardDungeon(this.dungeon, this.dWidth / 2, this.dWidth * 2)
  }

  makeBiasedDrunkardDungeon() {
    this.resetDungeon();
    this.dungeonGeneratorService.drunkardBiasedDungeon(this.dungeon, this.dWidth / 5, this.dWidth * 4);
  }

  makeDLADungeon() {
    this.resetDungeon();
    this.dungeonGeneratorService.diffusionLimitedAggregationDungeon(this.dungeon);
  }

  makeDLADungeon8Way() {
    this.resetDungeon();
    this.dungeonGeneratorService.diffusionLimitedAggregationDungeon8Way(this.dungeon);
  }

  makeCentralAttractor() {
    this.resetDungeon();
    this.dungeonGeneratorService.centralAttractorDungeon(this.dungeon);
  }

  makeCentralAttractorMirror() {
    this.resetDungeon();
    this.dungeonGeneratorService.centralAttractorMirrorDungeon(this.dungeon);
  }

}
