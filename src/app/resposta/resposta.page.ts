import { JokesService } from './../services/jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.page.html',
  styleUrls: ['./resposta.page.scss'],
})
export class RespostaPage implements OnInit {

  constructor(private jokesService: JokesService) { }

  resposta : any;

  ngOnInit() {
    this.resposta = this.jokesService.resposta;
  }

}
