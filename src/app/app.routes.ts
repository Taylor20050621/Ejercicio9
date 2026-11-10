// src/app/app.routes.ts
// SECCIÓN 7.1: CONFIGURACIÓN DE RUTAS DE LA SPA
// (Equivalente al app-routing.module.ts del manual: en Angular actual las
// rutas se declaran en app.routes.ts). Incorpora el Guard de seguridad.

import { Routes } from '@angular/router';
import { TareaListaComponent } from './components/tarea-lista/tarea-lista.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareaListaComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/tareas' }
];
