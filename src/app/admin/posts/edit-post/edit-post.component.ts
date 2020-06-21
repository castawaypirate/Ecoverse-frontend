import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Meta, Title} from "@angular/platform-browser";
import {IPost} from "../create-post/ipost";
import {EditPostService} from "./edit-post.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  public post: IPost
  public prevPost;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private title: Title , private meta: Meta, private postService: EditPostService, private actRoute: ActivatedRoute) { }

  postForm = this.fb.group({
    title:['', Validators.required],
    content:['', Validators.required],
    public: 0
  })

  ngOnInit(): void {
    this.title.setTitle('Edit post');
    this.meta.updateTag({ name: 'description', content: 'Post edit page' });
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe((data: IPost) =>{
      this.prevPost = data
    });
  }



  onSubmit() {
    this.post = this.postForm.value;
    this.post.id = this.prevPost.id;
    console.log(this.post);
    this.postService.editPost(this.post).subscribe(post=>{alert("Successfully Edited Post")});
  }

}
