import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Super } from 'src/app/models/super.model';
import { SuperService } from 'src/app/services/super.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  supers: Super[];
  listSelected: number = 0;
  selectedSuper: Super;

  query: {
    name?: string;
    id?: string;
    power?: string;
    nemesisName?: string;
  }

  listUpdatedSubscription: Subscription;

  constructor(private superService: SuperService) {
    this.changeList();

    this.listUpdatedSubscription = this.superService
      .supersListUpdated$.subscribe(
        () => {
          this.changeList();
        });
  }

  ngOnInit(): void {
    this.query = {}
  }

  changeList() {
    if (this.listSelected == 0) {
      this.superService.getHeroes()
        .subscribe(
          data => {
            this.supers = data as any;
          },
          error => {
            console.error(error);
          }
        );
    } else if (this.listSelected == 1) {
      this.superService.getVillains()
        .subscribe(
          data => {
            this.supers = data as any;
          },
          error => {
            console.error(error);
          }
        );
    } else {
      this.superService.getAllSupers()
        .subscribe(
          data => {
            this.supers = data as any;
          },
          error => {
            console.error(error);
          }
        );
    }
    this.selectedSuper = null;
  }

  selectSuper(superObj: Super) {
    this.selectedSuper = superObj;
  }

  onSearchClicked() {
    this.superService.getSupersByQuery(this.query)
      .subscribe(
        data => {
          this.supers = data as any;
        }, error => {
          console.error(error);
        }
      );
  }

}
