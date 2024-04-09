import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soporte-tecnico',
  templateUrl: './soporte-tecnico.component.html',
  styleUrls: ['./soporte-tecnico.component.css']
})
export class SoporteTecnicoComponent {
  constructor(private router: Router) { }

  enviarSoporte() {
    // Aquí colocas la lógica para enviar el formulario de soporte técnico al servidor

    // Después de enviar el formulario, redirige al usuario a la plataforma
    this.router.navigate(['/plataforma']); // Ajusta la ruta según corresponda
  }
}
