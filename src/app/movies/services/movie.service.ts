import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface paramsMovie {
  apiKey: string;
  t: string;
  y?: number | null
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'http://www.omdbapi.com/';
  private apiKey = '8e8d202';
  constructor(private http: HttpClient) { }

  getPosts(movie:string,date:number|null) {
    const params: paramsMovie = {
      apiKey: this.apiKey, 
      t: movie
    }
    if(date){
      params.y = date;
    }
    let sendParam = {}
    sendParam = params;
    return this.http.get(this.url, {params: sendParam});
  }

  getPostsById(id:string) {
    return this.http.get(this.url, {params: {apiKey: this.apiKey, i:id}});
  }
}
