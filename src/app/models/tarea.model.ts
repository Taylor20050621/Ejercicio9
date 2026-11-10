// src/app/models/tarea.model.ts
// SECCIÓN 3: CAPA DE MODELOS (TypeScript)
// Define la estructura fuertemente tipada para los objetos de la API.

export interface Tarea {
  id?: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
  prioridad: 'Alta' | 'Media' | 'Baja';
}
