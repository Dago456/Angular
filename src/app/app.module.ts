import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { InscripcionCursoComponent } from './inscripcion-curso/inscripcion-curso.component';
import { EvaluacionCursoComponent } from './evaluacion-curso/evaluacion-curso.component';
import { CreacionContenidoComponent } from './creacion-contenido/creacion-contenido.component';
import { SoporteTecnicoComponent } from './soporte-tecnico/soporte-tecnico.component';
import { LoginComponent } from './login/login.component';
import { PlataformaComponent } from './plataforma/plataforma.component';
import { RegistroEstudiantesComponent } from './registro-estudiantes/registro-estudiantes.component'; // Asegúrate de importar RegistroEstudiantesComponent si está en AppModule
import { RegistroProfesoresComponent } from './registro-profesores/registro-profesores.component'; // Asegúrate de importar RegistroProfesoresComponent si está en AppModule

@NgModule({
  declarations: [
    AppComponent,
    PerfilUsuarioComponent,
    InscripcionCursoComponent,
    EvaluacionCursoComponent,
    CreacionContenidoComponent,
    SoporteTecnicoComponent,
    LoginComponent,
    RegistroEstudiantesComponent, 
    RegistroProfesoresComponent,
    PlataformaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Agrega FormsModule a la lista de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
