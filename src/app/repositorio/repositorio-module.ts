import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositorioRoutingModule } from './repositorio-routing-module';
import { ListarRepositorios } from './listar-repositorios/listar-repositorios';

@NgModule({
  declarations: [ListarRepositorios],
  imports: [CommonModule, RepositorioRoutingModule],
})
export class RepositorioModule {}
