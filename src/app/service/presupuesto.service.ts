// src/app/presupuesto.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  constructor() { }

  calcularPresupuesto(paginas: number, idiomas: number): number {
    return paginas * idiomas * 30;
  }
}
