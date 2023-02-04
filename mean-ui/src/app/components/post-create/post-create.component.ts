import { Component } from '@angular/core';
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

  onAddPost() {
    const post = {title: this.enteredTitle, content: this.enteredContent}
    this.postService.raisePostCreatedEvent(post);
    this.enteredTitle = '';
    this.enteredContent = '';
  }
}
