import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario-service';

@Component({
  selector: 'app-listar-usuarios',
  standalone: false,
  templateUrl: './listar-usuarios.html',
  styleUrls: ['./listar-usuarios.css']
})
export class ListarUsuarios implements OnInit {

  usuarios: Usuario[] = [];
  usuarioSeleccionado: Usuario | null = null;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  seleccionarUsuario(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
  }

  cerrarDetalle(): void {
    this.usuarioSeleccionado = null;
  }
}