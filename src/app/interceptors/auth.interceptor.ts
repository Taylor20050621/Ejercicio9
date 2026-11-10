// src/app/interceptors/auth.interceptor.ts
// SECCIÓN 5.1: CAPA DE INTERCEPTORES (HttpInterceptor)
// Inyecta cabeceras de autorización de forma centralizada a TODAS las
// peticiones HTTP salientes.
//
// Nota: desde Angular 15 los interceptores son funciones (HttpInterceptorFn)
// en lugar de clases con HttpInterceptor. El comportamiento es exactamente el
// mismo que el del manual: clona la petición y añade la cabecera Authorization.

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = 'TOKEN_JWT_DE_PRUEBA_12345';

  // Clona la petición e inyecta la cabecera de autorización
  const authReq = request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};
