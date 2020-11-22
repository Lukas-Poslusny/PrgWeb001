import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private email;
  private name;
  private text;

  constructor() { }

  clickedButton() {
    console.log(this.email);
    console.log(this.name);
    console.log(this.text);
  }

  ngOnInit(): void {
  }

}
