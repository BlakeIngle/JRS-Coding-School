import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { UsersService } from 'src/app/services/users.service';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  messages: any[];
  activeUser;
  faUser = faUser;

  constructor(private messagesService: MessagesService,
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.messages = [];
    this.activeUser = this.usersService.getActiveUser();

    this.getMessages();
  }

  logout() {
    this.usersService.logout();
    this.activeUser = null;
  }

  getMessages() {
    this.messagesService.getAllMessages()
      .subscribe(data => {
        this.messages = data;
      }, error => {
        this.messages = [];
        if (error.status == 404) {
          // ignore
        } else {
          console.error("ERROR retrieving messages:", error);
        }
      });
  }

  submitMessage(message: string) {
    let user = this.usersService.getActiveUser();
    this.messagesService.postMessage(message, user.id)
      .subscribe(data => {
        this.getMessages();
      }, error => {
        console.error("ERROR posting message: ", error);
      });
  }
}