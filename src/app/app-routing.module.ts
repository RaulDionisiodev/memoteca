import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

/*
  Pra cada rota eu passo um objeto com o caminho
 */
const routes: Routes = [

  {
    path: "", 
    redirectTo: "listarPensamento",
    pathMatch: 'full' //Quando criar um path vazio precisamos passar o pathMatch
  },
  {
    path: "criarPensamento", 
    component: CriarPensamentoComponent 
  },
  
  {
    path: "listarPensamento", 
    component: ListarPensamentoComponent 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
