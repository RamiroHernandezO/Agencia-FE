import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { catchError, tap } from 'rxjs';
import { Servicio } from 'src/app/Class/Servicio';
import { DataServiceService } from 'src/servicio/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = ['En espera', 'En proceso', 'Finalizado'];
  barChartData: ChartDataset[] = [
    {
      data: [],
      label: 'Vehiculos',
    }
  ];

  constructor(private dataService: DataServiceService) {}

  ngOnInit(){
    this.dataService.GetServicios('Servicio').pipe(
      tap((response:Servicio[]) => {
        console.log('Datos recibidos:', response);
        const enEspera = response.filter(servicio => servicio.estatus === 'En espera').length;
        const enProceso = response.filter(servicio => servicio.estatus === 'En proceso').length;
        const finalizado = response.filter(servicio => servicio.estatus === 'Finalizado').length;
        this.barChartData = [
          { 
            data: [enEspera, enProceso, finalizado],
            label: 'Vehiculos',
            backgroundColor: ['#FF6382', '#36A2EA', '#FFCE55'], 
            borderColor: ['#FF6384', '#36A2EB', '#FFCE56'], 
            borderWidth: 1 
          }
        ];
      }),
      
    ).subscribe();
  }

}
