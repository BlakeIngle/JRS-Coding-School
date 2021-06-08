import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'animal-main-page',
  templateUrl: './animal-main-page.component.html',
  styleUrls: ['./animal-main-page.component.css']
})
export class AnimalMainPageComponent implements OnInit {

  user: User;
  showLogin = true;

  newUserSubscription: Subscription;

  constructor(private userService: UserService) {

    this.newUserSubscription = this.userService.newActiveUser$
      .subscribe((user: User) => {
        this.user = user;
        this.showLogin = false;
      });
   }

  ngOnInit(): void {


    this.user = this.userService.getActiveUser();

    if(this.user) {
      this.showLogin = false;
    } else {
      this.showLogin = true;
    }
  }
}
