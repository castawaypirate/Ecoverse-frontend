import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  isPassword: boolean=true;

  constructor(private fb: FormBuilder,private router: Router) { }

  public href: string = "";
  userprofileForm = this.fb.group({
    username: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    confirm: ['',Validators.required]
  });

  onSubmit() {
    //console.warn(this.userprofileForm.value);
    console.log(this.userprofileForm.valid);
  }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  togglePasswordVisibility(){

    if(this.isPassword === true){
        this.isPassword = false;
     } else{
        this.isPassword = true;
     }

    }
}
