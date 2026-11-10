// src/app/guards/auth.guard.ts
// SECCIÓN 5.2: CAPA DE SEGURIDAD (Guards)
// Protege las rutas privadas de la SPA mediante CanActivate.
//
// Nota: desde Angular 15 los guards son funciones (CanActivateFn) en lugar de
// clases que implementan la interfaz CanActivate. La lógica es la misma que
// la del manual: si no hay sesión activa, se redirige a la vista de login.

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const usuarioAutenticado = true; // Simulación de sesión activa

  if (usuarioAutenticado) {
    return true;
  } else {
    return router.parseUrl('/login'); // Redirección a la vista de login
  }
};
