import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { IUser } from '../../_interfaces/user';
import { FormBuilder } from '@angular/forms';
import { IUserdata } from '../../_interfaces/userdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
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
      this._userService.getUser().subscribe(user=>{
        
        this.user=user;
        console.log(this.user);
        this.userForm.setValue({username:this.user.username});
        this.profileForm.patchValue(this.user.data);
        localStorage.setItem('id',''+this.user.id);
        
      });
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

      const data = this.profileForm.value;
      data.username = this.userForm.value.username;
      data.password = password
      this._userService.updateUser(this.user,data).subscribe(user=>{user=this.user});
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
