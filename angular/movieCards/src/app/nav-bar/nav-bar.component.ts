import { Component, OnInit } from '@angular/core';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  faBell = faBell;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
