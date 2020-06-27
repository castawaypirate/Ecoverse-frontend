import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSidebar=false;
  auth = false;

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.auth = this.authSrv.isAuth();
  }

  toggleham(ham,sidenav){
    ham.classList.toggle('change');
    if(this.showSidebar){
      sidenav.style.width="0";
      this.showSidebar=false;
    }else{
      sidenav.style.width="190px";
      this.showSidebar=true;
    }
    
  }
}
