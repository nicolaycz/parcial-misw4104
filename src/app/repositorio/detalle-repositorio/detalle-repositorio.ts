import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio-service';

@Component({
  selector: 'app-detalle-repositorio',
  standalone: false,
  templateUrl: './detalle-repositorio.html',
  styleUrl: './detalle-repositorio.css',
})
export class DetalleRepositorio implements OnInit {

  repositorio: Repositorio | undefined;

  constructor(
    private route: ActivatedRoute,
    private repositorioService: RepositorioService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.repositorioService.getRepositorio(id).subscribe((repo) => {
      this.repositorio = repo;
    });
  }
}
