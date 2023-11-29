import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { DataServiceService } from 'src/servicio/data-service.service';

@Component({
  selector: 'app-nuevo-vehiculo',
  templateUrl: './nuevo-vehiculo.component.html',
  styleUrls: ['./nuevo-vehiculo.component.scss']
})
export class NuevoVehiculoComponent implements OnInit {
  servicioIds:any;
  vehiculoIds:any;
  folio: string = '';
  marca: string = '';
  modelo: string = '';
  anio: string = '';
  duenio: string = '';
  proximoServicio: string = '';
  fechaServicio: string = '';
  estatus: string = 'En espera';
  refaccion: string = '';
  cantidad: number = 0;

  refacciones: any;
  marcas: string[] = ['Nissan', 'Chevrolet', 'KIA', 'Volkswagen', 'Mazda'];
  modelos: string[] = [];
  marcasConModelos: { [key: string]: string[] } = {
    'Nissan': ['Altima', 'Sentra', 'Versa'],
    'Chevrolet': ['Aveo', 'Spark', 'Cruze'],
    'KIA': ['Sportage', 'Sorento', 'Rio'],
    'Volkswagen': ['Golf', 'Jetta', 'Tiguan'],
    'Mazda': ['Mazda 3', 'Mazda 6', 'CX-5']
  };

  constructor(private dataService: DataServiceService,public dialogRef: MatDialogRef<NuevoVehiculoComponent> ) {}

  ngOnInit(): void {
    this.dataService.GetRefacciones('Refaccion').subscribe(refaccion => {
      this.refacciones = refaccion;
    });
    this.generarFolioInicial();
  }

  generarFolioInicial(): void {
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const año = fecha.getFullYear().toString().substr(-2);
    const folioBase = `${mes.toString().padStart(2, '0')}${dia.toString().padStart(2, '0')}${año}`;
    this.dataService.GetUltimoFolio('Form/GetUltimo').subscribe((ultimoFolio: any) => {
      
      if (ultimoFolio && ultimoFolio.folio) {
        this.comprobarYActualizarFolio(ultimoFolio.folio, folioBase);
      } else {
        this.folio = `${folioBase}-1`;
      }
    });
  }
  
  comprobarYActualizarFolio(ultimoFolio: string, folioBase: string): void {
    const [ultimoFolioFecha, ultimoFolioNumero] = ultimoFolio.split('-');
    if (folioBase === ultimoFolioFecha) {
      const nuevoNumero = parseInt(ultimoFolioNumero) + 1;
      this.folio = `${folioBase}-${nuevoNumero}`;
    } else {
      this.folio = `${folioBase}-1`;
    }
  }
  

  onMarcaChange(): void {
    this.modelos = this.marca ? this.marcasConModelos[this.marca] : [];
  }

  onSubmit(): void {
    this.realizarInserciones();
  }
  
  realizarInserciones() {
    const vehicleData = {
      marca: this.marca,
      modelo: this.modelo,
      año: this.anio,
      dueño: this.duenio,
      proximoServicio: this.proximoServicio
    };
    this.dataService.InsertVehiculos('Vehiculo', vehicleData)
      .pipe(
        switchMap((resVehiculo: any) => {
          console.log('Respuesta de InsertVehiculos:', resVehiculo);
           this.vehiculoIds = resVehiculo;
          console.log( this.vehiculoIds)
          const serviceData = {
            vehiculoId: this.vehiculoIds,
            folio: this.folio,
            fecha: this.fechaServicio,
            estatus: this.estatus
          };
          console.log(serviceData);
          
          return this.dataService.InsertServicios('Servicio', serviceData)
            .pipe(
              switchMap((resServicio: any) => {
                this.servicioIds = resServicio;
                console.log( this.servicioIds)
                const serviceRefaccionesData = {
                  id:  this.servicioIds,
                  refaccionID: this.refaccion,
                  cantidad: this.cantidad
                };
                console.log(serviceRefaccionesData);
                return this.dataService.InsertServiciosRefacciones('ServicioRefaccion', serviceRefaccionesData);
              })
            );
        })
      )
      .subscribe({
        next: (resRefacciones) => {
          console.log('Inserción de refacciones completada:', resRefacciones);
          this.dialogRef.close('confirm');
        },
        error: (error) => {
          console.error('Error durante la inserción:', error);
        }
      });
  }
  

}
