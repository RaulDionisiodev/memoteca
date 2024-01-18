import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  formulario! : FormGroup;

  constructor(private servive : PensamentoService,
    private router : Router,
    private formbuilder : FormBuilder  
  ) { }

  ngOnInit(): void {

    this.formulario = this.formbuilder.group({
      conteudo: ['formulário reativo'],
      autoria: ['Angular'],
      modelo: "modelo1"
    })
  }

  criarPensamento() {
    this.servive.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(["/listarPensamento"])
    })
  }

  cancelar() {
    this.router.navigate(["/listarPensamento"])
  }

}
