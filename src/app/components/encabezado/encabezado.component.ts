import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'encabezado',
  templateUrl: './encabezado.component.html',
  // styleUrls: ['./home.component.scss']
})

export class Encabezado {
  constructor(private route: Router) { };

  inicio() {
    this.route.navigate(['/']);
  }
  foro() {
    this.route.navigate(['/foro']);
  }
  ofertas() {
    this.route.navigate(['/ofertas']);
  }
  cursos() {
    this.route.navigate(['/cursos']);
  }
}