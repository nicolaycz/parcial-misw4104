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

  constructor(private repositorioService: RepositorioService) { }

  ngOnInit(): void {
    this.repositorioService.getRepositorios().subscribe((data: Repositorio[]) => {
      this.repositorios = data;
    });
  }
}
