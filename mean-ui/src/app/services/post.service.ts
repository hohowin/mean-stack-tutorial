import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

//  private posts: Post[] = [];
  private postCreated = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    this.httpClient
      .get<{message: string, posts: any}>('http://localhost:3333/api/posts')
      .pipe(map((data) => {
        return data.posts.map((p: any) => {
          return {
            title: p.title,
            content: p.content,
            id: p._id
          };
        });
      }))
      .subscribe((transformed: Post[]) => {
        console.log(transformed);
        this.postCreated.next(transformed);
      });
  }

  getPostUpdateListener() {
    return this.postCreated.asObservable();
  }

  addPost(post: Post) {
    this.httpClient.post<{message: string}>('http://localhost:3333/api/posts', post)
      .subscribe((res) => {
          console.log(res.message);
          // this.posts.push(post);
          // this.postCreated.next([...this.posts]);
          this.getPosts();
      });
  }

  deletePost(postId: string) {
    this.httpClient.delete(`http://localhost:3333/api/posts/${postId}`)
      .subscribe((res) => {
        // this.posts = this.posts.filter(p => {
        //   console.log(`pid = ${p.id}, postId = ${postId}`);
        //   p.id !== postId;
        // });
        // this.postCreated.next([...this.posts]);
        this.getPosts();
      });
  }
}
