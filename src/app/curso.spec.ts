import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ServicioCursoService } from './servicio-curso.service';

describe('ServicioCursoService', () => {
  let service: ServicioCursoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioCursoService]
    });
    service = TestBed.inject(ServicioCursoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return courses', () => {
    const dummyCourses = [
      { id: 1, titulo: 'Curso 1' },
      { id: 2, titulo: 'Curso 2' }
    ];

    service.obtenerCursos().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(dummyCourses);
    });

    const req = httpMock.expectOne('https://ejemplo.com/api/cursos'); // Reemplaza la URL por la de tu API de cursos
    expect(req.request.method).toBe('GET');
    req.flush(dummyCourses);
  });

  it('should return course by id', () => {
    const dummyCourse = { id: 1, titulo: 'Curso 1' };

    // Utiliza números directamente como argumento
    service.obtenerCursoPorId("").subscribe(course => {
      expect(course).toEqual(dummyCourse);
    });

    const req = httpMock.expectOne('https://ejemplo.com/api/cursos/1'); // Reemplaza la URL por la de tu API de cursos
    expect(req.request.method).toBe('GET');
    req.flush(dummyCourse);
  });
});
