import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  constructor(private postService: PostService, private authService: AuthService){}

  posts: Post[] = [];
  private postsSub: Subscription = new Subscription();
  totalPosts: number = 0;
  postsPerPage: number = 2;
  pageSizeOptions: number[] = [1,2,5,10];
  currentPage: number = 1;

  private authStatusSub: Subscription;
  userIsAuth = false;

  ngOnInit(): void {
    this.postService.getPosts(this.postsPerPage, 1);
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((data: {posts: Post[], postCount: number}) => {
        this.totalPosts = data.postCount;
        this.posts = data.posts;
      });

    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      isAuth => {
        this.userIsAuth = isAuth;
      }
    );
  }

  onDelete(postId: string) {
    console.log(`Post ID = ${postId}`);
    this.postService.deletePost(postId);
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.postService.getPosts(this.postsPerPage, this.currentPage);
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
