import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({ //Sinaliza pro angular que essa é uma classe injetável
  providedIn: 'root' // Esse serviço pode ser disponibilizado em toda a aplicação porque o ProvidedIn é root
})
export class PensamentoService {

  private readonly API = ' http://localhost:3002/pensamentos';

  constructor(private http: HttpClient) { } // injeção de dependência

  listar() : Observable<Pensamento[]> {
     return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento) : Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

}
