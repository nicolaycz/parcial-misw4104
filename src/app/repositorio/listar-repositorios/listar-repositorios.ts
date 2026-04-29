import { Component, OnInit } from '@angular/core';
import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio-service';

@Component({
  selector: 'app-listar-repositorios',
  standalone: false,
  templateUrl: './listar-repositorios.html',
  styleUrl: './listar-repositorios.css',
})
export class ListarRepositorios implements OnInit {

  repositorios: Repositorio[] = [];
  filtro = '';
  lenguajeSeleccionado = '';
  orden: 'stars' | 'fecha' | 'nombre' = 'stars';

  constructor(private repositorioService: RepositorioService) { }

  ngOnInit(): void {
    this.repositorioService.getRepositorios().subscribe((data: Repositorio[]) => {
      this.repositorios = data;
    });
  }

  get lenguajes(): string[] {
    const set = new Set(this.repositorios.map(r => r.language));
    return Array.from(set).sort();
  }

  get repositoriosFiltrados(): Repositorio[] {
    const q = this.filtro.trim().toLowerCase();
    const filtrados = this.repositorios.filter(r => {
      const coincideTexto = !q
        || r.name.toLowerCase().includes(q)
        || r.description.toLowerCase().includes(q);
      const coincideLenguaje = !this.lenguajeSeleccionado
        || r.language === this.lenguajeSeleccionado;
      return coincideTexto && coincideLenguaje;
    });

    return [...filtrados].sort((a, b) => {
      switch (this.orden) {
        case 'stars': return b.stars - a.stars;
        case 'fecha': return b.createdAt.localeCompare(a.createdAt);
        case 'nombre': return a.name.localeCompare(b.name);
      }
    });
  }
}
