import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionCursoComponent } from './inscripcion-curso.component';

describe('InscripcionCursoComponent', () => {
  let component: InscripcionCursoComponent;
  let fixture: ComponentFixture<InscripcionCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscripcionCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
