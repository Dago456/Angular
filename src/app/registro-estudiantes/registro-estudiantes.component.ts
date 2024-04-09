import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-estudiantes',
  templateUrl: './registro-estudiantes.component.html',
  styleUrls: ['./registro-estudiantes.component.css']
})
export class RegistroEstudiantesComponent implements OnInit {
  gridItems!: number[];

  constructor() { }

  ngOnInit(): void {
    // Definir el array de 144 elementos para el fondo animado
    this.gridItems = Array.from({ length: 144 }, (_, index) => index + 1);
  }
}
