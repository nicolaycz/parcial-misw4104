import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing-module';
import { ListarUsuarios } from './listar-usuarios/listar-usuarios';

@NgModule({
  declarations: [
    ListarUsuarios
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  exports: [
    ListarUsuarios
  ]
})
export class UsuarioModule {}