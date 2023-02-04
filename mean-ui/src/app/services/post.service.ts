import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postCreated = new Subject<any>();

  constructor() { }

  raisePostCreatedEvent(data: any) {
    this.postCreated.next(data);
  }
}
