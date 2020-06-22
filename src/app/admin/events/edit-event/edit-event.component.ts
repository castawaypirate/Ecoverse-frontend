import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Meta, Title} from "@angular/platform-browser";
import {Ievent} from "../create-event/ievent";
import {EditEventService} from "./edit-event.service";
import { ActivatedRoute } from '@angular/router';
import {IPost} from "../../posts/create-post/ipost";
import { UserPostsService } from "../../posts/user-posts/user-posts.service";


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  public event: Ievent;
  public prevEvent;
  public prevPost;
  public ready = false;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private title: Title , private meta: Meta, private eventService: EditEventService, private actRoute: ActivatedRoute, private usrSrv: UserPostsService) { }

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
    this.title.setTitle('Edit event');
    this.meta.updateTag({ name: 'description', content: 'Event edit page' });
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.eventService.getEvent(id).subscribe((data: Ievent) => {
      this.prevEvent = data;
      console.log(this.prevEvent);
      this.usrSrv.getPost(this.prevEvent.post_id).subscribe((res: IPost) => {
        this.prevPost = res;
        console.log(this.prevPost);
      });
    });
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

  onSubmit() {
    this.event = this.eventForm.value;
    this.event.id = this.prevEvent.id;
    console.log(this.event);
    this.eventService.editEvent(this.event).subscribe(event=>{alert("Successfully Edited Event")});
  }


}
