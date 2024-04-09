import { TestBed } from '@angular/core/testing';

import { ServicioSoporteService } from './servicio-soporte.service';

describe('ServicioSoporteService', () => {
  let service: ServicioSoporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSoporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
