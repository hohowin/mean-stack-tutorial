import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  constructor(private postService: PostService){}

  posts: {title: string, content: string}[] = [];

  ngOnInit(): void {
    this.postService.postCreated.subscribe((p) => {this.posts.push(p)});
  }
}
