import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit(): void {
    this.text = "Saints & Sailors was founded in 1998 by William H. Macey. \
    We strive to provide the very best hircuts in the business. At Saint & Sailors \
    you can expext our barbers to provide supreme level care. All of our services \
    include a hot towel treatment and massage to leave you looking and feeling your very best. \
    You wont get this service anywhere else."
  }

}
