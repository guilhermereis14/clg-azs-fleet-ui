import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-veiculos-grid',
  templateUrl: './veiculos-grid.component.html',
  styleUrls: ['./veiculos-grid.component.css']
})
export class VeiculosGridComponent  {

 @Input() veiculos = [];

}
