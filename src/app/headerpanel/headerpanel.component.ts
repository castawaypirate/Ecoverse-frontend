import { Component, OnInit, HostListener, ElementRef, Renderer2, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-headerpanel',
  templateUrl: './headerpanel.component.html',
  styleUrls: ['./headerpanel.component.scss']
})
export class HeaderpanelComponent implements OnInit {
  @ViewChild("user", {read: ElementRef}) user: ElementRef;
  @ViewChild("content", {read: ElementRef}) content: ElementRef;
  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  @Output() offClick = new EventEmitter();
  ngOnInit(): void {

  }

  @HostListener('document:click', ['$event', '$event.target'])
    onClick(event: MouseEvent, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }
        if(targetElement!=this.content.nativeElement && targetElement!=this.user.nativeElement){
          if(this.content.nativeElement.style.display==="block"){
            this.content.nativeElement.style.display="none";
            this.user.nativeElement.classList.remove("active");
          }
        }
    }

  expand(user,content){
    user.classList.toggle("active");
    if(content.style.display==="block"){
      content.style.display="none";
    }else{
      content.style.display="block";
    }

  }

}
