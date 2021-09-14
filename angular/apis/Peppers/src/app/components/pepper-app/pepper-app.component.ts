import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PepperService } from 'src/app/services/pepper.service';

@Component({
  selector: 'pepper-app',
  templateUrl: './pepper-app.component.html',
  styleUrls: ['./pepper-app.component.css']
})
export class PepperAppComponent implements OnInit {

  peppers: any;
  selectedPepper: any;

  constructor(
    private pepperService: PepperService,
    private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.peppers = [];
      this.loadPeppers(params.color);
    });

  }

  ngOnInit(): void {
  }

  loadPeppers(color?: string) {
    if (!color) {
      this.pepperService.getAllPeppers()
        .subscribe(
          data => {
            this.peppers = data;
            console.log(this.peppers)
          });
    } else {
      this.pepperService.getPeppersByColor(color)
        .subscribe(
          data => {
            this.peppers = data;
            console.log(this.peppers)
          });
    }
  }

  onDeleteClicked(pepper) {
    console.log(pepper.id)
    this.pepperService.deletePepperById(pepper.id)
      .subscribe(
        data => {
          alert("Pepper deleted successfully.");
          this.loadPeppers();
        }, error => {
          console.error(error)
          alert("ERROR: Pepper was not deleted. " + error.error)
        }
      );
  }

  onPepperClicked(pepper) {
    this.selectedPepper = pepper;
  }

}
