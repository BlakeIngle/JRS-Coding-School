import { Component, Input, OnInit } from '@angular/core';
import { YugiohCard } from 'src/app/models/YugiohCard.model';
import { YugiohAPIService } from 'src/app/services/yugioh-api.service';

@Component({
  selector: 'yugioh-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: YugiohCard;

  keys: string[];

  constructor(private api: YugiohAPIService) { }

  ngOnInit(): void {
    this.getRandom();
  }

  getRandom() {
    this.card = null;
    this.api.getRandomCard().subscribe(
      (data) => {
        this.card = data as YugiohCard;
        this.keys = Object.keys(this.card);
        console.log(this.card)
      }, (error) => {
        console.error("ERROR retrieving random card: ", error)
      }
    )
  }
}
