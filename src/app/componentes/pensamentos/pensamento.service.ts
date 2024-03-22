import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({ //Sinaliza pro angular que essa é uma classe injetável
  providedIn: 'root' // Esse serviço pode ser disponibilizado em toda a aplicação porque o ProvidedIn é root
})
export class PensamentoService {

  private readonly API = ' http://localhost:3002/pensamentos';

  constructor(private http: HttpClient) { } // injeção de dependência

  listar(pagina: number, filtro: string) : Observable<Pensamento[]> {
     
    const itensPorPagina = 6

    let params = new HttpParams()
        .set("_page", pagina)
        .set("_limit", itensPorPagina)     
      
      if (filtro.trim().length > 2) {
        params = params.set("q", filtro)
      } 
    //return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`)

    return this.http.get<Pensamento[]>(this.API,{params})
  }

  criar(pensamento: Pensamento) : Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento : Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id : number) : Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  bucarPorID(id : number) : Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

}
