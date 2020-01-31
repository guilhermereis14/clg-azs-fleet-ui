// imports do Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports de Componentes da aplicação
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [ // Declaro os componentes presentes no módulo criado (Core)
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ /*Seto quais componentes do meu módulo ficarão visíveis para outros 
              componentes/modulos externos */
    NavbarComponent
  ]
})
export class CoreModule { }
