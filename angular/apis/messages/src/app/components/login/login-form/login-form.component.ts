import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.usersService.attemptLogin(form.value.username, form.value.password)
      .subscribe(data => {
        // login successful
        this.usersService.setActiveUser(data as any);
        this.router.navigate([""]);
      }, error => {
        if (error.status == 500) {
          // total error
          this.errorMessage = "Uh oh! :( Something went wrong... Try Again."
        } else {
          // 401
          console.log(error);
          this.errorMessage = error.error.message;
        }
      });
  }

}
