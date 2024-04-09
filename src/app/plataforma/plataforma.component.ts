import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})

export class PlataformaComponent {
  gridItems: number[] = Array.from({length: 144}, (_, i) => i + 1);
  navigateToRegisterEstudiantes(): void {       
  }
  constructor(private router: Router) { }

  navigateToPerfilUsuario(): void {
    this.router.navigate(['/perfil-usuario']);
  }

  navigateToInscripcionCurso(): void {
    this.router.navigate(['/inscripcion-curso']);
  }

  navigateToEvaluacionCurso(): void {
    this.router.navigate(['/evaluacion-curso']);
  }

  navigateToCreacionContenido(): void {
    this.router.navigate(['/creacion-contenido']);
  }

  navigateToSoporteTecnico(): void {
    this.router.navigate(['/soporte-tecnico']);
  }

  cerrarSesion(): void {
   
    localStorage.clear();
    
    this.router.navigate(['/login']);
  }

}
