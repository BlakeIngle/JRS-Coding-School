import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  macaroniTower: string;

  constructor() { }

  ngOnInit(): void {
    this.macaroniTower = "Mac Tower:";
  }

  addCheese(evt: string) {
    this.macaroniTower += "\nCheese-" + evt
  }

  addMac(evt: string) {
    this.macaroniTower += "\nMacaroni-" + evt
  }

}
