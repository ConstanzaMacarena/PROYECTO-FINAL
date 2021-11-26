import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sesion } from './components/sesion/sesion.component';
import { Cursos } from './components/listado_cursos/cursos.component';
import { Ofertas } from './components/listado_ofertas/ofertas.component';
import { Foro } from './components/foro/foro.component';

const routes: Routes = [
  {path: "", component: Sesion},
  {path: "cursos", component: Cursos},
  {path: "ofertas", component: Ofertas},
  {path: "foro", component: Foro},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
