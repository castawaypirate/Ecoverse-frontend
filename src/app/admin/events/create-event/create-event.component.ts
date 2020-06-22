import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Meta, Title} from "@angular/platform-browser";
import {IPost} from "../../posts/create-post/ipost";
import { Ievent} from "./ievent";
import { CreateEventService} from "./create-event.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  public event: Ievent
  public post: IPost

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private title: Title , private meta: Meta, private eventService: CreateEventService) { }

  eventForm = this.fb.group({
    title:['', Validators.required],
    content:['', Validators.required],
    image: null,
    public: 0,
    start:['', Validators.required],
    end:['',Validators.required],
    place:['',Validators.required],
  })

  ngOnInit(): void {
    this.title.setTitle('Create an event');
    this.meta.updateTag({ name: 'description', content: 'Event creation page' });
  }

  onSubmit() {
    this.event = this.eventForm.value;
    console.log(this.event);
    this.eventService.addEvent(this.event).subscribe(event => {alert("Successfully Added Event")});
  }

  triggerUpload(fileInput) {
    fileInput.click();
  }

  fileUpload(fileInput) {
    let reader = new FileReader();

    if (fileInput.files && fileInput.files.length) {
      const [file] = fileInput.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.eventForm.controls.image.setValue(file);
      }
    }
  }


}
