import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-veiculo-cadastro',
  templateUrl: './veiculo-cadastro.component.html',
  styleUrls: ['./veiculo-cadastro.component.css']
})
export class VeiculoCadastroComponent {

  categoriaVeiculo = [
    {label: 'truck', value: '1'},
    {label: 'Bitruck', value: '2'},
    {label: 'Cavalo Trucado', value: '3'},
    {label: 'Cavalo Simples', value: '4'},
    {label: 'Reboque Baú', value: '5'},
    {label: 'Reboque Sider', value: '6'},
    {label: 'Reboque Grade Baixa', value: '7'},
    {label: 'Reboque Baú Frigurificoa', value: '8'},
    {label: 'Reboque Tanque', value: '9'}];
}

