import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.model';
import { AnimalAPIService } from 'src/app/services/animal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  loading: boolean = false;
  loginFailed: boolean = false;

  constructor(private animalService: AnimalAPIService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    // attempt to login
    setTimeout(() => {
      // prevent ' ' characters from being typed
      this.animalService.login(this.username, this.password)
      .subscribe(data => {
        if(!data) {
          // password did not match
          // do something
          this.onLoginFailed();
          return;
        }
        // do something

        //convert server data to correct json format

        let user = new User({
          id: data[0].ID,
          username: data[0].UserName
        });

        this.userService.setActiveUser(user);

        this.router.navigate([""]);
      },
      error => {
        console.error("ERROR logging in: ", error)
        this.onLoginFailed();
      });
    }, 750);
    
  }

  createUser() {
    // attempt to create user

    if (!this.password || this.password.length < 6) {
      // cannot create a user
      // do somehting
      console.log("password is too short")
      return;
    } else if (! /^[a-zA-Z0-9_.]*$/.test(this.username)) {
      console.log("invalid username")
      // username has invalid characters
      // do something
      return;
    } else {
      // all good
      // actually login

      this.animalService.createUser(this.username, this.password)
        .subscribe(data => { 
          // successful login ?
          console.log(data)
        },
        error => { 
          // bad login
          console.error("ERROR logging in: ", error)
        });
    }
    
  }

  removeSpaces(evt: string, isUsername: boolean) {
    if(isUsername) {
      this.username = evt.replace(/ /g, "_");
    } else {
      this.password = evt.replace(/ /g, "_");
    }
  }

  onLoginFailed() {
    this.loading = false;
    this.loginFailed = true;
    // put a message on the page that says 
    // * username or password incorrect *
  }
}
