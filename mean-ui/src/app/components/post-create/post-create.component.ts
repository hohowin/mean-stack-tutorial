import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  
  enteredTitle: string = '';
  enteredContent: string = '';
  private mode = 'create';
  private postId: string = '';
  post: Post|null = null;
  isLoading = false;

  constructor(private postService: PostService, public route: ActivatedRoute){}
  
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId') ?? "";
        this.isLoading = true;
        this.post = this.postService.getPost(this.postId);
        this.isLoading = false;
      } else {
        this.mode = 'create';
        this.postId = '';
      }
    });
  }

  onSavePost(form: NgForm) {

    if (form.invalid) return;

    const post: Post = {
      id: this.postId,
      title: form.value.title,
      content: form.value.content
    };

    this.isLoading = true;
    if (this.mode === 'create') {
      console.log(post)
      this.postService.addPost(post);
    } else {
      console.log(post)
      this.postService.updatePost(post);
    }
    
    form.resetForm();
  }
}
