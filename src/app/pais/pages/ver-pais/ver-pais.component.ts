import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: []
})
export class VerPaisComponent implements OnInit {

  verpais!: Country;

  constructor( private activatedRoute: ActivatedRoute, private paisSrv: PaisService) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisSrv.getPaisPorAlpha(id)), tap(console.log)
    )
    .subscribe( pais => this.verpais = pais);
    
    // this.activatedRoute.params
    //   .subscribe(({id}) => {
    //     this.paisSrv.getPaisPorAlpha(id)
    //       .subscribe(pais => {
    //         console.log(pais)
    //       });
    //   })
  }

}
