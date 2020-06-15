import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../_interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { IAuth } from '../_interfaces/auth';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  isPassword = true;
  show = true;

  public user : IUser;
  public auth: IAuth;


  constructor(private fb: FormBuilder,private router: Router, private title: Title, private meta: Meta, private _userService: UserService, private _autservice: AuthService) { }

  userprofileForm = this.fb.group({
    username: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    password_confirmation: ['',Validators.required]
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
    this.user = this.userprofileForm.value;
    this.user.role="testrole";
    console.log(this.user);
    this._userService.addUser(this.user).subscribe(user=>{alert("Succesfully Added Product details")});
  }

  onLogin() {
    this._autservice.login(this.memberprofileForm.controls.username.value,this.memberprofileForm.controls.password.value).subscribe(auth=>{this.auth=auth,console.log(this.auth.accessToken)});
  }

  ngOnInit(): void {
    console.log(this.router.url);
    this.title.setTitle('Sign-in / Register');
    this.meta.updateTag({ name: 'description', content: 'Sign-in , Login , Register' });
    //this._userService.getUsers().subscribe(user=>{this.user=user,this.memberprofileForm.setValue({username:this.user.username,password:this.user.role})});

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
