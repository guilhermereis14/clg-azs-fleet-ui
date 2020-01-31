import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens-pesquisa',
  templateUrl: './viagens-pesquisa.component.html',
  styleUrls: ['./viagens-pesquisa.component.css']
})
export class ViagensPesquisaComponent {
  viagens = [
    {
      datainicio : '2020/01/01', datafinal: '', motorista: 'Claiton', valorfrete: '1700.00'
  }];
}
