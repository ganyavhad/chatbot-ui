import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.myForm = this.fb.group({
      "message": this.fb.control('', Validators.required),
    });
  }

  myForm: FormGroup;

  ngOnInit() {
  }
  onClickSubmit(data) {
    console.log("Submit called", data)
    this.apiService.sendMessage(data)
  }

}
