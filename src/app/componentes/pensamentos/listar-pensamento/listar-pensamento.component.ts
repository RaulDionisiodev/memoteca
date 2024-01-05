import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
      {
        conteudo: "I love music",
        autoria: "Raul",
        modelo: "modelo3"
      },
      {
        conteudo: "Passo informações para o compnente filho",
        autoria: "Componente pai",
        modelo: "modelo2"
      },
      {
        conteudo: "Minha propriedade é anotada com @Input",
        autoria: "Componente filho",
        modelo: "modelo1"
      },
      {
        conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
        autoria: "Componente filho",
        modelo: "modelo1"
      }
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
