import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viagens-grid',
  templateUrl: './viagens-grid.component.html',
  styleUrls: ['./viagens-grid.component.css']
})
export class ViagensGridComponent {

@Input() viagens = [];

}
