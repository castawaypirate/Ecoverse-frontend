import { Component, OnInit, HostListener, ElementRef, Renderer2, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { IUser } from '../../_interfaces/user';

@Component({
  selector: 'app-headerpanel',
  templateUrl: './headerpanel.component.html',
  styleUrls: ['./headerpanel.component.scss']
})
export class HeaderpanelComponent implements OnInit {
  @ViewChild("userbtn", {read: ElementRef}) userbtn: ElementRef;
  @ViewChild("content", {read: ElementRef}) content: ElementRef;

  public user : IUser;
  public text : string;

  constructor(private elRef: ElementRef , private renderer: Renderer2 , private router : Router , private _userService : UserService) { }

  @Output() offClick = new EventEmitter();

  ngOnInit(): void {
    this._userService.getUser().subscribe(user=>{this.user=user,this.text=this.user.username,localStorage.setItem('id',''+this.user.id)});
  }

  @HostListener('document:click', ['$event', '$event.target'])
    onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }
        if(targetElement!=this.content.nativeElement && targetElement!=this.userbtn.nativeElement){
          if(this.content.nativeElement.style.display==="block"){
            this.content.nativeElement.style.display="none";
            this.userbtn.nativeElement.classList.remove("active");
          }
        }
    }

  expand(userbtn,content){
    userbtn.classList.toggle("active");
    if(content.style.display==="block"){
      content.style.display="none";
    }else{
      content.style.display="block";
    }
  }


  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('id');
    this.router.navigate(['/sign']);
  }

}
