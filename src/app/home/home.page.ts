import { JokesService } from './../services/jokes.service';
import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private jokesService: JokesService) { }

  piadasHome: any[];
  piada: any;
  piadaPesquisa: string;
  piadas: any[]
  src: any = "/assets/img.PNG";
  valor: string;


  showPiadas() {
    this.jokesService.getAllJokes().subscribe(paidas => {
      this.piadas = paidas[this.indexAletorio(paidas)];
    });
  }

  getPiadasComFiltro() {
    this.jokesService.getAllJokes().subscribe(resposta => {
      this.piadas = resposta.filter(elemento => {
        if (elemento.pergunta.toUpperCase().match(this.valor)) {
          return elemento;
        }
      });
    }, erro => {
      console.log(erro);
    }, () => {
      console.log('sucesso');
    });
  }


  obterResposta(resposta : any){
    this.jokesService.adicionarResposta(resposta);
  }

  indexAletorio(paidas) {
    const index = Math.floor(Math.random() * paidas.length + 1);
    return index;
  }
}
