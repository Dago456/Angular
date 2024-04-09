import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-profesores',
  templateUrl: './registro-profesores.component.html',
  styleUrls: ['./registro-profesores.component.css']
})
export class RegistroProfesoresComponent implements OnInit {
  gridItems!: number[];

  constructor() { }

  ngOnInit(): void {
    this.gridItems = Array.from({ length: 144 }, (_, i) => i + 1);
  }
}
