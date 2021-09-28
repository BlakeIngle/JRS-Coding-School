import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  usernameSubscription: Subscription;

  username: string;
  password: string;
  confirmPassword: string;

  errorMessage: string;

  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    if (this.verifyForm(form.value.username, form.value.password, form.value.confirmPassword)) {
      this.usersService.postUser({
        username: form.value.username,
        password: form.value.password
      }).subscribe(data => {
        // account created
        this.usersService.getUserByUsername(form.value.username)
          .subscribe(data => {
            console.log("create user successful", data)
            this.usersService.setActiveUser(data[0]);
            this.router.navigate([""]);
          }, error => {
            console.error("ERROR retrieving user after sign up.", error);
            this.router.navigate(["login"]);
          });
      }, error => {
        console.error(error);
        // did not create account
        // alert("FAIL: account not made")
      });
    }
  }

  verifyForm(username: string, password1, password2) {
    if (username.length > 25) {
      // too long
      this.errorMessage = "Username can be no longer than 25 characters."
      return false;
    } else if (password1 != password2) {
      // passwords dont match
      this.errorMessage = "Passwords must match.";
      return false;
    } else if (!username.match(/^[a-zA-Z0-9]+$/)) {
      // invalid username
      this.errorMessage = "Username must contain only letters and numbers.";
      return false;
    }
    return true;
  }

  usernameChanged(name: string) {
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
    }
    this.usernameSubscription = this.usersService.getUserByUsername(name)
      .subscribe(data => {
        // username taken
        this.errorMessage = "Username already exists"
      }, error => {
        if (error.status == 404) {
          // if 404 -> good
          this.errorMessage = "";
        } else {
          console.error(error);
          // if 500 -> bad
        }
      });
  }
}
