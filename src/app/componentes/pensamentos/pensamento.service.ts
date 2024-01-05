import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({ //Sinaliza pro angular que essa é uma classe injetável
  providedIn: 'root' // Esse serviço pode ser disponibilizado em toda a aplicação porque o ProvidedIn é root
})
export class PensamentoService {

  constructor(private http: HttpClient) { } // injeção de dependência


}
