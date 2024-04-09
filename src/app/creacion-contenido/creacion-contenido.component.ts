import { Component } from '@angular/core';

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

  submitForm() {
    console.log('Contenido creado:', this.contenido);
    
    // Aquí puedes agregar la lógica para enviar el formulario al servidor
    
    // Redireccionar a la plataforma después de enviar el formulario
    window.location.href = '/plataforma'; // Reemplaza 'URL_DE_LA_PLATAFORMA' con la URL de tu plataforma
  }
}
