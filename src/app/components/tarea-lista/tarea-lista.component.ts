// src/app/components/tarea-lista/tarea-lista.component.ts
// SECCIÓN 6.1: COMPONENTE LISTADO Y PIPE ASYNC
// Inyecta el servicio y expone un Observable para ser consumido por el Pipe Async.

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.service';

@Component({
  imports: [CommonModule], // Habilita *ngIf y *ngFor en componentes standalone
  selector: 'app-tarea-lista',
  styleUrl: './tarea-lista.component.css',
  templateUrl: './tarea-lista.component.html',
})
export class TareaListaComponent implements OnInit {

  tareas$!: Observable<Tarea[]>;

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.tareas$ = this.tareaService.getTareas();
  }

  eliminar(id: number | undefined): void {
    if (id) {
      this.tareaService.eliminarTarea(id).subscribe(() => {
        this.cargarTareas();
      });
    }
  }
}
