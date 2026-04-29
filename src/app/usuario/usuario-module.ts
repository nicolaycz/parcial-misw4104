import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsuarioRoutingModule } from './usuario-routing-module';
import { ListarUsuarios } from './listar-usuarios/listar-usuarios';
import { DetalleUsuario } from './detalle-usuario/detalle-usuario';

@NgModule({
  declarations: [ListarUsuarios, DetalleUsuario],
  imports: [CommonModule, FormsModule, UsuarioRoutingModule],
  exports: [ListarUsuarios],
})
export class UsuarioModule {}
