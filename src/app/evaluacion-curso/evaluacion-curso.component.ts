import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion-curso',
  templateUrl: './evaluacion-curso.component.html',
  styleUrls: ['./evaluacion-curso.component.css']
})
export class EvaluacionCursoComponent {
  nombreCurso: string = '';
  nivel: string = '';
  comentario: string = '';
  calificacion: number = 0;

  constructor(private router: Router) {}

  enviarEvaluacion() {
    // Aquí colocas la lógica para enviar la evaluación del curso
 
    // Redirige al usuario de vuelta a la plataforma
    this.router.navigate(['/plataforma']);
  }
}
