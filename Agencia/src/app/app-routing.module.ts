import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegistrarseComponent } from './Pages/registrarse/registrarse.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ServiciosComponent } from './Pages/servicios/servicios.component';
import { EntregasComponent } from './Pages/entregas/entregas.component';
import { VehiculosComponent } from './Pages/vehiculos/vehiculos.component';
import { RefaccionesComponent } from './Pages/refacciones/refacciones.component';
import { AuthGuard } from './Pages/login/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]},
  { path: 'servicios', component: ServiciosComponent,canActivate: [AuthGuard]},
  { path: 'entregas', component: EntregasComponent,canActivate: [AuthGuard]},
  { path: 'vehiculos', component: VehiculosComponent,canActivate: [AuthGuard]},
  { path: 'refacciones', component: RefaccionesComponent,canActivate: [AuthGuard]},

  { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
