import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  content: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
postsUrl = 'assets/db.json';

  constructor(public http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
