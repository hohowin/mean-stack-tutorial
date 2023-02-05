import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  constructor(private postService: PostService){}

  posts: Post[] = [];

  ngOnInit(): void {
    this.postService.postCreated.subscribe((p) => {this.posts.push(p)});
  }
}
