import { Injectable } from '@angular/core';


import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

export interface PessoaFiltro {
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  nome: string;
  // passo a Url do serviço
  pessoasUrl = 'http://localhost:8080/pessoas';

  // injetando o serviço HTTP
  constructor(private http: HttpClient ) { }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    this.nome = filtro.nome;
    if (filtro.nome) {
        this.pessoasUrl = `http://localhost:8080/pessoas/consulta/nome/${this.nome}`;
    }
    return this.http.get(`${this.pessoasUrl}`)
      .toPromise()
      .then(response => response);
    }

}
