import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private postsSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe(
        p => this.posts = p
      );
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}
