// imports do Angular
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports do PrimeNg
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// Imports de Componentes da aplicação
import { VeiculoCadastroComponent } from './veiculo-cadastro/veiculo-cadastro.component';
import { VeiculosPesquisaComponent } from './veiculos-pesquisa/veiculos-pesquisa.component';
import { VeiculosGridComponent } from './veiculos-grid/veiculos-grid.component';



@NgModule({
  declarations: [ // Declaro os componentes presentes no módulo criado (Veiculos)
    VeiculoCadastroComponent,
    VeiculosPesquisaComponent,
    VeiculosGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
  ],
  exports: [ /*Seto quais componentes do meu módulo ficarão visíveis para outros 
            componentes/modulos externos */
    VeiculoCadastroComponent,
    VeiculosPesquisaComponent
  ]
})
export class VeiculosModule { }
