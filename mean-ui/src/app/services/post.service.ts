import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [];
  private postCreated = new Subject<Post[]>();

  constructor(private httpClient: HttpClient, private router: Router) { }

  getPosts(): void {
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
        this.posts = transformed;
        this.postCreated.next(transformed);
      });
  }

  getPost(id: string): Post {
    const found = this.posts.find(p => p.id === id);
    if (found) {
      return {...found};
    } else {
      return {id: '', title: '', content: ''};
    }
  }

  getPostUpdateListener(): Observable<Post[]> {
    return this.postCreated.asObservable();
  }

  addPost(post: Post): void {
    this.httpClient.post<{message: string, postId: string}>('http://localhost:3333/api/posts', post)
      .subscribe(res => {
          console.log(res.message);
          // post.id = res.postId;
          // this.posts.push(post);
          // this.postCreated.next([...this.posts]);
          this.getPosts();
          this.router.navigate(['/']);
      });
  }

  updatePost(post: Post) {
    this.httpClient.put<{message: string}>(`http://localhost:3333/api/posts/${post.id}`, post)
      .subscribe(res => {
        console.log(res.message);
        this.getPosts();
        this.router.navigate(['/']);
      });
  }

  deletePost(postId: string): void {
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
