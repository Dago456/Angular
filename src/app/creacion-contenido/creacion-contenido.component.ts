import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion-contenido',
  templateUrl: './creacion-contenido.component.html',
  styleUrls: ['./creacion-contenido.component.css']
})
export class CreacionContenidoComponent {
  contenido = {
    titulo: '',
    descripcion: '',
    categoria: '',
    fechaPublicacion: ''
  };
  
  gridItems: number[] = Array.from({length: 144}, (_, i) => i + 1);
  navigateToRegisterEstudiantes(): void {       
  }
  constructor(private router: Router) { }

  regresarALaPlataforma() {
    // Aquí redirigimos al usuario a la página de la plataforma
    this.router.navigate(['/plataforma']);
  }
}
