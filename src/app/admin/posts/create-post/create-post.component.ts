import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Meta, Title} from "@angular/platform-browser";
import {IPost} from "./ipost";
import {CreatePostService} from "./create-post.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public post: IPost

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private title: Title , private meta: Meta, private postService: CreatePostService) { }

  postForm = this.fb.group({
    title:['', Validators.required],
    content:['', Validators.required],
    image: null,
    public: 0
  })

  ngOnInit(): void {
    this.title.setTitle('Create a post');
    this.meta.updateTag({ name: 'description', content: 'Post creation page' });
  }

  onSubmit() {
    this.post = this.postForm.value;
    console.log(this.post);
    this.postService.addPost(this.post).subscribe(post=>{alert("Successfully Added Post")});
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
        this.postForm.controls.image.setValue(file);
      }
    }
  }

}
