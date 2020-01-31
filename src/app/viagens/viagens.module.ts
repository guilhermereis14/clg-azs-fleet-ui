
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Imports do PrimeNg
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

// Imports de Componentes da aplicação
import { ViagemCadastroComponent } from './viagem-cadastro/viagem-cadastro.component';
import { ViagensGridComponent } from './viagens-grid/viagens-grid.component';
import { ViagensPesquisaComponent } from './viagens-pesquisa/viagens-pesquisa.component';



@NgModule({
  declarations: [ // Declaro os componentes presentes no módulo criado (viagens)
    ViagemCadastroComponent,
    ViagensPesquisaComponent,
    ViagensGridComponent
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

    CurrencyMaskModule
  ],
  exports: [ /*Seto quais componentes do meu módulo ficarão visíveis para outros 
              componentes/modulos externos */
    ViagemCadastroComponent,
    ViagensPesquisaComponent
  ]
})
export class ViagensModule { }
