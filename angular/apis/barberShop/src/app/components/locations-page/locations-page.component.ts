import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BarberShopService } from '../../services/barber-shop.service';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.css']
})
export class LocationsPageComponent implements OnInit {

  locations: any[];
  sub: Subscription;

  constructor(private barberShopService: BarberShopService) { }

  ngOnInit(): void {
    this.locations = [];

    this.sub = this.barberShopService.getAllLocations()
      .subscribe(
        data => {
          this.locations = data as any[];
          console.log(this.locations)
        }, error => {
          console.error("ERROR retrieving locations:", error)
        }
      );
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
