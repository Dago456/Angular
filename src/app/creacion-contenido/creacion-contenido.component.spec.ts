import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionContenidoComponent } from './creacion-contenido.component';

describe('CreacionContenidoComponent', () => {
  let component: CreacionContenidoComponent;
  let fixture: ComponentFixture<CreacionContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionContenidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
