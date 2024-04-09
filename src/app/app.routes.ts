import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreacionContenidoComponent } from './creacion-contenido/creacion-contenido.component';
import { EvaluacionCursoComponent } from './evaluacion-curso/evaluacion-curso.component';
import { InscripcionCursoComponent } from './inscripcion-curso/inscripcion-curso.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PlataformaComponent } from './plataforma/plataforma.component';
import { RegistroEstudiantesComponent } from './registro-estudiantes/registro-estudiantes.component';
import { RegistroProfesoresComponent } from './registro-profesores/registro-profesores.component';
import { SoporteTecnicoComponent } from './soporte-tecnico/soporte-tecnico.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'creacion-contenido', component: CreacionContenidoComponent },
  { path: 'evaluacion-curso', component: EvaluacionCursoComponent },
  { path: 'inscripcion-curso', component: InscripcionCursoComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'plataforma', component: PlataformaComponent },
  { path: 'registro-estudiantes', component: RegistroEstudiantesComponent },
  { path: 'registro-profesores', component: RegistroProfesoresComponent },
  { path: 'soporte-tecnico', component: SoporteTecnicoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a la página de inicio de sesión si la URL está vacía
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes }; // Exporta las rutas
