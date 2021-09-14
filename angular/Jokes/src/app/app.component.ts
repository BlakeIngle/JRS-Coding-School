import { Component } from '@angular/core';
import { jokeData } from '../assets/jokeData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jokes';
  jokes = jokeData;
}
