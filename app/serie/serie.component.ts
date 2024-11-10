import { Component, OnInit } from '@angular/core';
import { Serie } from './serie'
import { dataSeries } from './dataSerie'
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  standalone: false
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];

  promedio: number = 0;

  getSeriesList() {
    this.serieService.getSeries().subscribe(series =>{
      this.series = series;
      this.calcularPromedio();
    }) 
  }

  calcularPromedio() {
    var totalTemporadas = 0;
    for (var i = 0, series = this.series; i < series.length; i++) {
        var serie = series[i];
        totalTemporadas += serie.seasons;
    }
    var promedioN = Math.round(totalTemporadas / this.series.length);
    this.promedio = promedioN;
  }


  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeriesList();
  }

}
