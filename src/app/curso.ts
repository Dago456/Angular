export class Curso {
    id: number;
    titulo: string;
    descripcion: string;
    instructor: string;
    fechaInicio: Date;
    duracion: number;
  
    constructor(
      id: number,
      titulo: string,
      descripcion: string,
      instructor: string,
      fechaInicio: Date,
      duracion: number
    ) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.instructor = instructor;
      this.fechaInicio = fechaInicio;
      this.duracion = duracion;
    }
  }
  