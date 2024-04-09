import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {} // Inyectamos el servicio Router

  iniciarSesion(): void {
    // Verificar si el usuario y la contraseña son correctos
    if (this.usuario === 'David' && this.contrasena === 'Novoa') {
      // Redirigir a la plataforma
      this.router.navigate(['/plataforma']);
    } else {
      // Mostrar un mensaje de error o realizar otras acciones según sea necesario
      console.log('Usuario o contraseña incorrectos');
    }
  }
  gridItems: number[] = Array.from({length: 144}, (_, i) => i + 1);
  navigateToRegisterEstudiantes(): void {
    // Implementar la lógica para navegar al registro de estudiantes
    console.log('Redirigiendo al registro de estudiantes...');
    this.router.navigate(['/registro-estudiantes']);
  }

  navigateToRegisterProfesores(): void {
    // Implementar la lógica para navegar al registro de profesores
    console.log('Redirigiendo al registro de profesores...');
    this.router.navigate(['/registro-profesores']);
  }
}
