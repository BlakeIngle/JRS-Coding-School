import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarberShopService } from 'src/app/services/barber-shop.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  barbers: any[];

  constructor(private barberShopService: BarberShopService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.barberShopService.getBarbersByLocation(id)
      .subscribe(data => {
        this.barbers = data as any;
      }, error => {
        console.error("ERROR retrieving barbers:", error)
      });
  }

}
