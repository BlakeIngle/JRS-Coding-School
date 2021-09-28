import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'barber-shop-app',
  templateUrl: './barber-shop-app.component.html',
  styleUrls: ['./barber-shop-app.component.css']
})
export class BarberShopAppComponent implements OnInit {

  constructor(public router: Router,
    private location: Location) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
