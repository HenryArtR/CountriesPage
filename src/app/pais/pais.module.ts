import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PaisTablaComponent } from './componentes/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './componentes/pais-input/pais-input.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    PaisTablaComponent,
    PaisInputComponent,
    VerPaisComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PaisModule { }
