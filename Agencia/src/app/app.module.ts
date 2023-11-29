import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './Pages/login/login.component';
import { RegistrarseComponent } from './Pages/registrarse/registrarse.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EntregasComponent } from './Pages/entregas/entregas.component';
import { RefaccionesComponent } from './Pages/refacciones/refacciones.component';
import { VehiculosComponent } from './Pages/vehiculos/vehiculos.component';
import { ServiciosComponent } from './Pages/servicios/servicios.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NuevoVehiculoComponent } from './Pages/vehiculos/nuevo-vehiculo/nuevo-vehiculo.component';
import { EditarVehiculoComponent } from './Pages/vehiculos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './Pages/vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    SidebarComponent,
    DashboardComponent,
    EntregasComponent,
    RefaccionesComponent,
    VehiculosComponent,
    ServiciosComponent,
    NuevoVehiculoComponent,
    EditarVehiculoComponent,
    EliminarVehiculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    NgChartsModule,
    DragDropModule,
    MatDialogModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
