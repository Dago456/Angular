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

  guardarCambios() {
    // Aquí iría la lógica para guardar los cambios en el perfil de usuario

    // Después de guardar los cambios, redirecciona a la plataforma
    this.router.navigate(['/plataforma']); // Ajusta la ruta según corresponda
  }
}
