import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-estudiantes',
  templateUrl: './registro-estudiantes.component.html',
  styleUrls: ['./registro-estudiantes.component.css']
})
export class RegistroEstudiantesComponent implements OnInit {
  contenido: any = { titulo: '' }; // Define la propiedad contenido con un objeto vacío como valor inicial
  gridItems: number[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Inicializar el array de 144 elementos para el fondo animado
    this.gridItems = Array.from({ length: 144 }, (_, i) => i + 1);
  }

  crearcontenido() {
    // Después de inscribirse, redirecciona a la plataforma
    this.router.navigate(['/login']); // Ajusta la ruta según corresponda
  }
}
