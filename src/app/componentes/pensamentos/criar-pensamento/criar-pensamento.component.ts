import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: 'i',
    conteudo: "Aprendendo Angular",
    autoria: 'Dev',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("Novo pensamento Criado")
  }

  cancelar() {
    alert("cancelado!")
  }

}
