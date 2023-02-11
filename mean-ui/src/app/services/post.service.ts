import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [];
  private postCreated = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    this.httpClient.get<{message: string, posts: Post[]}>('http://localhost:3333/api/posts')
      .subscribe((data) => {
        this.posts = data.posts;
        this.postCreated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postCreated.asObservable();
  }

  addPost(post: Post) {
    this.httpClient.post<{message: string}>('http://localhost:3333/api/posts', post)
      .subscribe((res) => {
          console.log(res.message);
          this.posts.push(post);
          this.postCreated.next([...this.posts]);
      });
  }
}
