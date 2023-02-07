import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {

  enteredTitle: string = '';
  enteredContent: string = '';


  constructor(private postService: PostService){}

  onAddPost(form: NgForm) {

    if (form.invalid) return;

    const post: Post = {
      id: 'abc',
      title: form.value.title,
      content: form.value.content
    };
    this.postService.addPost(post);
    form.resetForm();
  }
}
