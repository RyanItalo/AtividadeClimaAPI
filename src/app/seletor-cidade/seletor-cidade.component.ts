import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClimaService } from '../services/clima-service';
import { Cidade } from '../models/Cidade';
import { WeatherData } from '../models/Weather';

@Component({
  selector: 'app-seletor-cidade',
  templateUrl: './seletor-cidade.component.html',
  styleUrls: ['./seletor-cidade.component.css']
})
export class SeletorCidadeComponent implements OnInit {
  selectedCity: number | undefined;
 weatherData: WeatherData | undefined;

 @Output() cidadeSelecionada = new EventEmitter<number>();
  cities: Cidade[] = [
    { id: 1, nome: "Aracaju", estado: "SE", latitude: 10.54, longitude: 37.04 },
    { id: 2, nome: "Belém", estado: "PA", latitude: 1.27, longitude: 48.30 },
    { id: 3, nome: "Belo Horizonte", estado: "MG", latitude: 19.55, longitude: 43.56 },
    { id: 4, nome: "Boa Vista", estado: "RR", latitude: 2.49, longitude: 60.40 },
    { id: 5, nome: "Brasília", estado: "DF", latitude: 15.46, longitude: 47.55 },
    { id: 6, nome: "Curitiba", estado: "PR", latitude: 25.25, longitude: 49.16 },
    { id: 7, nome: "Florianópolis", estado: "SC", latitude: 27.35, longitude: 48.32 },
    { id: 8, nome: "Fortaleza", estado: "CE", latitude: 3.43, longitude: 38.32 },
    { id: 9, nome: "Goiânia", estado: "GO", latitude: 16.40, longitude: 49.15 },
    { id: 10, nome: "Natal", estado: "RN", latitude: 5.47, longitude: 35.12 },

  ];

  constructor(private climaService: ClimaService) { }

 ngOnInit(): void {
 }

 buscarClima() {

    if (this.selectedCity) {
      this.cidadeSelecionada.emit(this.selectedCity);
    }
 }

}
