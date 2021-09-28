import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() body: string;
  @Input() user: number;

  username: string;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUser(this.user);
  }

  getUser(id: number) {
    if (id) {
      this.usersService.getUserById(id)
        .subscribe(data => {
          console.log(data)
          this.username = data[0].username;
        }, error => {
          console.error("ERROR retrieving user " + this.user, error);
        });
    }
  }

}
