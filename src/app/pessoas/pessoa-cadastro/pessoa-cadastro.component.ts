import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {
  sexoPessoa = [
    { label: 'Masculino', value: 'Masculino'},
    { label: 'Feminino', value: 'Feminono'}
  ];

  categoriaCnh = [
    { label: 'A', value: 'A'},
    { label: 'B', value: 'B'},
    { label: 'AB', value: 'AB'},
    { label: 'C', value: 'C'},
    { label: 'D', value: 'D'},
    { label: 'E', value: 'E'}
  ];
}


