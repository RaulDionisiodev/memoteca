import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento : Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo:""
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute  // Classe que fornece informações sobre as rotas
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    /*
      snapshot - uma captura ou fotografia da rota no momento em que for acessada
      paramMap - retorna um mapa com informações obrigatórias e opcionais do pensamento
    */

     this.service.bucarPorID(parseInt(id!)).subscribe(
        (pensamento) => {
          this.pensamento = pensamento
        }
     )
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
