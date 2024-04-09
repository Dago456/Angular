import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = '';
  direccion: string = '';

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
