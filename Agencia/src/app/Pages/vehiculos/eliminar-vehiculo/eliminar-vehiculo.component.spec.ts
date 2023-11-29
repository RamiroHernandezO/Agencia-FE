import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVehiculoComponent } from './eliminar-vehiculo.component';

describe('EliminarVehiculoComponent', () => {
  let component: EliminarVehiculoComponent;
  let fixture: ComponentFixture<EliminarVehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarVehiculoComponent]
    });
    fixture = TestBed.createComponent(EliminarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
