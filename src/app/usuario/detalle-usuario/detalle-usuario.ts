import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-detalle-usuario',
  standalone: false,
  templateUrl: './detalle-usuario.html',
  styleUrl: './detalle-usuario.css',
})
export class DetalleUsuario {
  @Input() usuario: Usuario | null = null;
  @Output() cerrar = new EventEmitter<void>();

  onCerrar(): void {
    this.cerrar.emit();
  }
}
