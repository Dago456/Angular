import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { InscripcionCursoComponent } from './inscripcion-curso/inscripcion-curso.component';
import { EvaluacionCursoComponent } from './evaluacion-curso/evaluacion-curso.component';
import { CreacionContenidoComponent } from './creacion-contenido/creacion-contenido.component';
import { SoporteTecnicoComponent } from './soporte-tecnico/soporte-tecnico.component';
import { LoginComponent } from './login/login.component'; // Asegúrate de importar LoginComponent si está en AppModule

@NgModule({
  declarations: [
    AppComponent,
    PerfilUsuarioComponent,
    InscripcionCursoComponent,
    EvaluacionCursoComponent,
    CreacionContenidoComponent,
    SoporteTecnicoComponent,
    LoginComponent // Asegúrate de incluir LoginComponent aquí si está en AppModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
