import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  isPassword = true;
  show = true;
  constructor(private fb: FormBuilder,private router: Router) { }

  //public href: string = "";
  userprofileForm = this.fb.group({
    username: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    confirm: ['',Validators.required]
  });

  memberprofileForm = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  });

  showLogin() {
    this.show = false;
  }

  showRegister() {
    this.show = true;
  }

  onSubmit() {
    console.log(this.userprofileForm.value);
  }

  onLogin() {
    console.log(this.memberprofileForm.value);
  }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  touch_highlight(event){
    event.target.style.backgroundColor = 'gray';
  }

  highlight(event){
    event.target.style.backgroundColor = 'gray';
  }
  togglePasswordVisibility(elem){
    elem.target.style.backgroundColor = '';
    if(this.isPassword === true){
        elem.target.style.backgroundImage = 'url(\'../../assets/images/eye.png\')';
        this.isPassword = false;
     } else{
        elem.target.style.backgroundImage = 'url(\'../../assets/images/eye_slash.png\')';
        this.isPassword = true;
     }
  }
}
