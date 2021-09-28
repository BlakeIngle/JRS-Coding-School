import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  faFeather = faFeatherAlt;
  faPaperPlane = faPaperPlane;

  @Output() newMessageSubmitted = new EventEmitter<string>();

  message: string;

  constructor() { }

  ngOnInit(): void {
    this.message = "";
  }

  onFormSubmitted(form: NgForm) {
    this.newMessageSubmitted.emit(form.value.message);
    form.reset();
  }

}
