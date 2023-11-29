import { Component } from '@angular/core';
import { NuevoVehiculoComponent } from './nuevo-vehiculo/nuevo-vehiculo.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './eliminar-vehiculo/eliminar-vehiculo.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { DataServiceService } from 'src/servicio/data-service.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent {
// @ViewChild(MatTable) table: MatTable<any>;
  Vehiculo:any;
  // drop(event: CdkDragDrop<any[]>) {
  //   if (event.previousIndex !== event.currentIndex) {
  //     moveItemInArray(this.Vehiculo, event.previousIndex, event.currentIndex);
  
  //     const updatedItems = this.Vehiculo.map((item, index) => ({
  //       Id: item.id,
  //       Nombre: item.nombre,
  //       Orden: index + 1,
  //       Imagen: item.imagen
  //     }));
  //     this.table.renderRows();
  //     this.actualizarOrdenBaseDatos(updatedItems);
  //   }
  // }
  // actualizarOrdenBaseDatos(items: any[]) {
  //   console.log(items);
  //   items.forEach(item => {
  //     this.dataService.ActualizarVehiculo(item).subscribe(
  //       response => {
  //       },
  //       error => {
  //       }
  //     );
  //   });
  // }
  openNuevoVehiculo():void{
    const dialogRef= this.dialog.open(NuevoVehiculoComponent,{
      width: '600px',
      height: '550px',
    });
    this.Close(dialogRef);
  }
  
  Close(ref:any){
    ref.afterClosed().subscribe((result:any) => {
      if (result === 'confirm') {
        this.cargarDatosTabla();
      }
    });
  }
  
  openEditarVehiculo(id:number,nombre:string,orden:number):void{
    const dialogRef= this.dialog.open(EditarVehiculoComponent,{
      width: '550px',
      data:{id:id,nombre:nombre,orden:orden}
    });
    this.Close(dialogRef);
  }
  openEliminarVehiculo(id:number,nombre:string):void{
    const dialogRef= this.dialog.open(EliminarVehiculoComponent,{
      width: '500px',      
      data:{id:id,nombre:nombre}
    });
    this.Close(dialogRef);
  }
  cargarDatosTabla(){
    this.dataService.GetVehiculos('Form/GetVehiculos').pipe(
      tap(response => {
        this.Vehiculo = response
        console.log(this.Vehiculo);
      }),
      ).subscribe();
  }
  constructor(public router: Router, private dataService: DataServiceService,public dialog: MatDialog) { }
  
  
    ngOnInit(){
    this.cargarDatosTabla();
    }
}
