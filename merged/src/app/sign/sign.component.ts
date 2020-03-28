import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  show = true;
  demo = 'As doume ti fainetai';

  demo2 = ['ena', 'duo', 'tria'];

  constructor() { }

  ngOnInit(): void {
  }

  showLogin() {
    this.show = true;
  }

  showRegister() {
    this.show = false;
  }
}
