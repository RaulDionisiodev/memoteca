import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos : Pensamento[]= []
  paginaAtual : number = 1
  haMaisPensamentos: boolean = true;
  
  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    //Toda lógica que deve ser realizada no ato do carregamento do componente vem nessa função
    
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos() : void {
    console.log("clicado")
    this.service.listar(++this.paginaAtual)
    .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos)
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
    })
  }

}
