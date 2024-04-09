import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importa Observable y of desde 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServicioCursoService {

  constructor() { }

  // Define el método obtenerCursos para obtener una lista de cursos
  obtenerCursos(): Observable<any[]> {
    // Aquí puedes implementar la lógica para obtener los cursos desde tu backend o algún otro origen de datos
    // Por ahora, simplemente retornaremos un arreglo vacío
    return of([]);
  }

  // Define el método obtenerCursoPorId para obtener un curso por su ID
  obtenerCursoPorId(id: string): Observable<any> {
    // Aquí puedes implementar la lógica para obtener un curso por su ID desde tu backend o algún otro origen de datos
    // Por ahora, simplemente retornaremos un objeto vacío
    return of({});
  }
}
