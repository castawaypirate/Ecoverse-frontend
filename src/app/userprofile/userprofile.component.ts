import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  @ViewChild("tex", {read: ElementRef}) el: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  edit(tex){
    // console.log(tex.contentEditable)
    // console.log(!false)
    // tex.contentEditable=!tex.contentEditable
    // this.el.nativeElement.contentEditable


    if(tex.contentEditable==='true'){
      tex.contentEditable='false'
    }
    else{
      tex.contentEditable='true'
    }
    var n =document.getElementById('tex')
    tex.focus()
    }

}
