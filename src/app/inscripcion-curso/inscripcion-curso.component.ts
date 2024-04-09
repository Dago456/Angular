import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripcion-curso',
  templateUrl: './inscripcion-curso.component.html',
  styleUrls: ['./inscripcion-curso.component.css']
})
export class InscripcionCursoComponent {
  nombreCurso: string = '';
  nivel: string = '';
  fechaInicio: string = '';
  duracion: number = 0;

  gridItems: number[] = Array.from({length: 144}, (_, i) => i + 1);
  navigateToRegisterEstudiantes(): void {       
  }
  constructor(private router: Router) { }

  inscribirse() {
    // Aquí iría la lógica para procesar la inscripción al curso
//()
    // Después de inscribirse, redirecciona a la plataforma
    this.router.navigate(['/plataforma']); // Ajusta la ruta según corresponda
  }
}
