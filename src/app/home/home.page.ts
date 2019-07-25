import { JokesService } from './../services/jokes.service';
import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private jokesService : JokesService) {}
  
  piadasHome : any[];
  piada : any;
  piadaPesquisa : string;
  piadas : string[]
  src : any = "/assets/img.PNG";

  showPiadas(){
    this.jokesService.getAllJokes().subscribe(paidas =>{
      this.piada = paidas[this.indexAletorio(paidas)];
    });
  }

  searchOnJokes(){
    this.piadas = this.piadas.filter(element =>{
        if(element.pergunta.match(this.valorInupt)){

        }
    });
  }

  indexAletorio (paidas) {
    const index =  Math.floor(Math.random() * paidas.length + 1);
    return index;
  }
}
