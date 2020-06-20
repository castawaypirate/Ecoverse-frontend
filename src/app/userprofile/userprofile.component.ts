import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { IUser } from '../_interfaces/user';
import { FormBuilder } from '@angular/forms';
import { IUserdata } from '../_interfaces/userdata';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  @ViewChild("tex", {read: ElementRef}) el: ElementRef;

  public user : IUser;
  public userdata : IUserdata;
  public editable : boolean;


  constructor( private router : Router, private fb : FormBuilder , private _userService: UserService , private _authService : AuthService) { }

  userForm = this.fb.group({
    username: ['']
  });

  profileForm = this.fb.group({
    name: [''],
    surname: [''],
    email: [''],
    location: [''],
    birth_date: ['']
  });


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  ngOnInit(): void {
    (async () => {
      this._userService.getUser().subscribe(user=>{this.user=user,this.userForm.setValue({username:this.user.username}),localStorage.setItem('id',''+this.user.id)});
      await this.delay(2000);
      this._userService.getUserData(localStorage.getItem('id')).subscribe(userdata=>{
        this.userdata=userdata,
        this.profileForm.setValue({
          name:this.userdata.name,
          surname:this.userdata.surname,
          email:this.userdata.email,
          location:this.userdata.location,
          birth_date:this.userdata.birth_date})
        });
    })();


      this.editable=true;
  }

  edit(ed){
    if(this.editable){
      this.editable=false;
      ed.innerText='Update';
      var listdata = document.getElementsByClassName('data') as HTMLCollectionOf<HTMLElement>;
      for (var i = 0, len = listdata.length; i < len; i++) {
        listdata[i].style.borderWidth='1px';
      }
    }else{
      this.editable=true;
      var listdata = document.getElementsByClassName('data') as HTMLCollectionOf<HTMLElement>;
      for (var i = 0, len = listdata.length; i < len; i++) {
        listdata[i].style.borderWidth='0';
      }
      var password = prompt('Please enter your password:', '');
      while (password === null || password===''){
        var password = prompt('Please enter your password:', '');
      }
      let params = '?';
      for (const key in this.profileForm.value) {
        if((this.profileForm.value[key]!=null)){
          params=params+key+'='+this.profileForm.value[key]+'&';
        }
      }

      params=params+'password='+password+'&role=testrole&username='+this.userForm.value['username'];
      // const parames = new HttpParams()
      // .set('password',password)
      // .set('username',this.userForm.value['username'])
      // .set('role','testrole')
      // .set('name',this.profileForm.value['name'])
      // .set('surname',this.profileForm.value['surname'])
      // .set('email',this.profileForm.value['email'])
      // .set('location',this.profileForm.value['location'])
      // .set('birth_date',this.profileForm.value['birth_date']);


      // this.user.username=this.userForm.value;
      // const params = new HttpParams()
      // .set('password', password)
      // .set('username','kappa')
      // .set('email','kappa@mail')
      // .set('role','role');
      // console.log(params);
      // console.log(parames);
      console.log(params);
      this._userService.updateUser(this.user,params).subscribe(user=>{user=this.user});
      ed.innerText='Edit';
    }
  }

  delete(){
    if (confirm('Are you sure you want to delete your account?')) {
      var password = prompt('Please enter your password:', '');
      while (password === null || password===''){
        var password = prompt('Please enter your password:', '');
      }
      this._userService.deleteUser(this.user,password).subscribe(user=>{
        user=this.user,localStorage.removeItem('userToken'),
        localStorage.removeItem('id'),
        this.router.navigate(['/home'])
      });
    }
  }
}
