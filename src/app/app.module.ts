import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Cursos } from './components/listado_cursos/cursos.component';
import { Ofertas } from './components/listado_ofertas/ofertas.component';
import { Foro } from './components/foro/foro.component';
import { Encabezado } from './components/encabezado/encabezado.component';
import { Sesion } from './components/sesion/sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    Encabezado,
    Cursos,
    Ofertas,
    Foro,
    Sesion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
