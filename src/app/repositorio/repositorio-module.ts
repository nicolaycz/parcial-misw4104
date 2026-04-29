import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RepositorioRoutingModule } from './repositorio-routing-module';
import { ListarRepositorios } from './listar-repositorios/listar-repositorios';
import { DetalleRepositorio } from './detalle-repositorio/detalle-repositorio';

@NgModule({
  declarations: [ListarRepositorios, DetalleRepositorio],
  imports: [CommonModule, FormsModule, RouterModule, RepositorioRoutingModule],
  exports: [ListarRepositorios],
})
export class RepositorioModule {}
