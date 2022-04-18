import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: []
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = []
  
  constructor(private paisSrv: PaisService) { }
  
  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.paises = []
    this.paisSrv.buscarCapital(this.termino)
    .subscribe( (paises) => {
      this.paises = paises
    }, (err) => {
      this.hayError = true;
      this.paises = []
    });
  }

  sugerencias( termino: string){
    this.hayError = false;
  }

  ngOnInit(): void {
  }

}
