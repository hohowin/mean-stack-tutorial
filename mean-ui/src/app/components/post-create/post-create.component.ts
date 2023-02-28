import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
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
  form: FormGroup;

  constructor(private postService: PostService, public route: ActivatedRoute, private formBuilder: FormBuilder){}
  
  ngOnInit() {

    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required]],
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId') ?? "";
        this.isLoading = true;
        this.post = this.postService.getPost(this.postId);
        this.isLoading = false;

        this.form.setValue({
          'title': this.post.title,
          'content': this.post.content,
        });

      } else {
        this.mode = 'create';
        this.postId = '';
      }
    });
  }

  onSavePost() {

    if (this.form.invalid) return;

    const post: Post = {
      id: this.postId,
      title: this.form.value.title,
      content: this.form.value.content
    };

    this.isLoading = true;
    if (this.mode === 'create') {
      console.log(post)
      this.postService.addPost(post);
    } else {
      console.log(post)
      this.postService.updatePost(post);
    }
    
    this.form.reset();
  }

  get f() {
    return this.form.controls;
  }
}
