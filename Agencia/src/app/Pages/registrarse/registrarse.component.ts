import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { Usuario } from 'src/app/Class/Usuario';
import { DataServiceService } from 'src/servicio/data-service.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {
  constructor(private snackBar: MatSnackBar, private router: Router, private dataService:DataServiceService) { }
  userData: Usuario = new Usuario();
  onRegister(event:Event) {
    event.preventDefault();
    const data = {
      Users:this.userData.Users,
      Contraseña:this.userData.Contrasena,
      Email:this.userData.Email,
      RolID:2
    };

    this.dataService.InsertData('Usuario', data).pipe(
      tap(response => {
        console.log('Datos recibidos antes de suscribirse:', response);
        let snackBarRef = this.snackBar.open('Te has registrado correctamente', 'OK', {
          duration: 5000,
        });
        snackBarRef.afterDismissed().subscribe(() => {
          this.router.navigate(['/login']);
        });
      }),
      catchError(error => {
        console.error('Error al insertar datos:', error);
        this.snackBar.open('Necesitas rellenar todos los campos', 'OK', {
          duration: 5000,
        });
        return throwError(error); 
      })
    ).subscribe();
    
  }
}
