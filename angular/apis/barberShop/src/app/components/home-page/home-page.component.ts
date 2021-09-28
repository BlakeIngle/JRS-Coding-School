import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  links: { label: string, value: string }[];

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.links = [
      { label: "Locations", value: "locations" },
      { label: "Services", value: "services" },
      { label: "About Us", value: "about" }
    ];
  }

}
