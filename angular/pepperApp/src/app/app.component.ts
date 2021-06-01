import { Component } from '@angular/core';
import { Pepper } from './models/pepper.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pepperApp';

  selectedPepper;

  onPepperSelected(pepper: Pepper) {
    this.selectedPepper = pepper;
  }
}
