
// imports do Angular
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



// imports de Component
import { AppComponent } from './app.component';


// imports de Modules
import { ViagensModule } from './viagens/viagens.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { CoreModule } from './core/core.module';
import { PessoaService } from './pessoas/pessoa.service';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

  // Importando os Módulos criados
    ViagensModule,
    PessoasModule,
    VeiculosModule,
    CoreModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
