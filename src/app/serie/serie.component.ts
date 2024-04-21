import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  
  constructor(private serieService : SerieService) { }
  

  getSerieList() {
    this.serieService.getSeries().subscribe(serie =>{
      this.series = serie;
    });
  }

  averageSeasons() {
    let suma = 0;
    const totales =this.series.length;
    for (const s of this.series){
      suma = suma + s.seasons;
    }
    const avg = suma/totales;
    return avg;
  }

  ngOnInit() {
    this.getSerieList();
  }

}
