import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos-pesquisa',
  templateUrl: './veiculos-pesquisa.component.html',
  styleUrls: ['./veiculos-pesquisa.component.css']
})
export class VeiculosPesquisaComponent {

    veiculos = [
      { placa: 'HMX-5819', cidade: 'Uberaba', estado: 'Minas Gerais', renavam: '4564',
      chassi: 'dfsafasf4454', fabricante: 'Volks', modelo: 'fskfjaksf', anofabricacao: '01/01/2020',
      categoria: 'Bitruck' },
      { placa: 'HMX-5819', cidade: 'Uberaba', estado: 'Minas Gerais', renavam: '4564',
      chassi: 'dfsafasf4454', fabricante: 'Volks', modelo: 'fskfjaksf', anofabricacao: '01/01/2020',
      categoria: 'Bitruck' }
    ];
}
