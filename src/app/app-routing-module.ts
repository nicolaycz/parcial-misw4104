import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarRepositorios } from './repositorio/listar-repositorios/listar-repositorios';
import { DetalleRepositorio } from './repositorio/detalle-repositorio/detalle-repositorio';

const routes: Routes = [
  { path: 'repositorios', component: ListarRepositorios },
  { path: 'repositorios/:id', component: DetalleRepositorio },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
