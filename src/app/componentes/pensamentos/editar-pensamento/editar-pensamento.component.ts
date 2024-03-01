import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  formularioEdicao! : FormGroup;
  
  constructor(
    private service : PensamentoService,
    private router : Router,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder  
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.service.bucarPorID(parseInt(id!)).subscribe((pensamento) => {
      this.formularioEdicao = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pensamento.modelo]
      })
    })
  }

  editarPensamento() {
    console.log(this.formularioEdicao.valid)
    if(this.formularioEdicao.valid) {
      this.service.editar(this.pensamento).subscribe(() => {
        this.router.navigate(["/listarPensamento"])
      })
    }
  }

  cancelar() {
    this.router.navigate(["/listarPensamento"])
  }

  habilitarBotao(): string {
    if(this.formularioEdicao.valid) {
      return "botao"
    }
    else return "botao__desabilitado"
  }

}
