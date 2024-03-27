import { Component, Input } from '@angular/core';
import { WeatherData } from '../models/Weather';

@Component({
  selector: 'app-informacao-clima',
  templateUrl: './informacao-clima.component.html',
  styleUrls: ['./informacao-clima.component.css']
})
export class InformacaoClimaComponent {

  @Input() clima: WeatherData | undefined;

  showDetalhes: boolean = false; 

 constructor() {}


 mostrarDetalhes() {
    this.showDetalhes = true;
 }

}
