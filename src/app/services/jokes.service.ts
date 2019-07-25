import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  url = '/assets/piadas.json'
  constructor(private http: HttpClient) { }

  getAllJokes(){
    return this.http.get<any[]>(this.url);
  }
}
