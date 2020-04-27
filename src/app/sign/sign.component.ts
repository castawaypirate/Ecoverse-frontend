import { Meta, Title } from '@angular/platform-browser';
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
  constructor(private fb: FormBuilder,private router: Router, private title: Title, private meta: Meta) { }

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
    this.title.setTitle('Sign-in / Register');
    this.meta.updateTag({ name: 'description', content: 'Sign-in , Login , Register' });
  }

  togglePW(elem){
    elem.classList.toggle('slash');
    if(this.isPassword === true){
        this.isPassword = false;
     } else{
        this.isPassword = true;
     }
  }
}
