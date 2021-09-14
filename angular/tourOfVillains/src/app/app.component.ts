import { Component, OnInit } from '@angular/core';
import { Villain } from 'src/assets/villain';
import { villainsData } from '../assets/villainsData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourOfVillains';
  villains: Villain[] = villainsData;
  selectedVillain: Villain;

  selectVillain(villain: Villain) {
    this.selectedVillain = villain;
  }
}
