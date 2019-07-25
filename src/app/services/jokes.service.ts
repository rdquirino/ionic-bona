import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  resposta : any;

  url = '/assets/piadas.json'
  constructor(private http: HttpClient) { }

  getAllJokes(){
    return this.http.get<any[]>(this.url);
  }

  adicionarResposta(resposta : any){
    this.resposta = resposta;
  }
}
