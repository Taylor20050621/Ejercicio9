// src/app/app.config.ts
// Configuración de la aplicación:
// - provideRouter: habilita el enrutamiento cliente de la SPA.
// - provideHttpClient + withInterceptors: habilita HttpClient y registra el
//   interceptor de autorización de forma centralizada (equivalente a usar
//   HttpClientModule y el token HTTP_INTERCEPTORS del manual, adaptado a la
//   API standalone de Angular actual).

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
