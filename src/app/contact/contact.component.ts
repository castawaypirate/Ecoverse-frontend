import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private title: Title , private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Contact Us');
    this.meta.updateTag({ name: 'description', content: 'Contact Information' });
  }

}
