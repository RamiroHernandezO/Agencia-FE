import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefaccionesComponent } from './refacciones.component';

describe('RefaccionesComponent', () => {
  let component: RefaccionesComponent;
  let fixture: ComponentFixture<RefaccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefaccionesComponent]
    });
    fixture = TestBed.createComponent(RefaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
