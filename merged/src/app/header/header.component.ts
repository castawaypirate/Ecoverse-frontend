import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSidebar=false;

  constructor() { }

  ngOnInit(): void {
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
