import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ExposantService {
  constructor(private http: HttpClient) {}
  //get Expo
  getPosts() {
    return this.http.get('http://localhost:3000/api/exposants/');
  }
  addPost(post: any) {
    return this.http.post('http://localhost:3000/api/exposants/', post);
  }
  deletePost(id: number) {
    return this.http.delete('http://localhost:3000/api/exposants/' + id);
  }
  getPost(idd: number) {
    return this.http.get('http://localhost:3000/api/exposants/' + idd);
  }
  updatePost(idd: number, new_post: any) {
    return this.http.put(
      'http://localhost:3000/api/exposants/' + idd,
      new_post
    );
  }
}
