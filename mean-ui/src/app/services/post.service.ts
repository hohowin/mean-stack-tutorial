import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postCreated = new Subject<Post>();

  constructor() { }

  raisePostCreatedEvent(data: Post) {
    this.postCreated.next(data);
  }
}
