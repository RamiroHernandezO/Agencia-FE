import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './Autenticacion/authentication.service';
import { tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  

  username!: string;
  password!: string;
  error!: string;
  logeado!:boolean;
  constructor(private authService: AuthenticationService, private router: Router,private snackBar: MatSnackBar) {}
  
  async login() {
    localStorage.clear();
    
      await(this.authService.login(this.username,this.password)).subscribe({
        next:(res:any)=>{
          console.log(res[0].rolID)
          const rol =res[0].rolID
         if(rol == 2 ){
          localStorage.setItem('User',JSON.stringify(res[0]));
          this.logeado =true
          this.router.navigate(['/dashboard'])
         }else if(rol == 1){
          debugger
          localStorage.setItem('User',JSON.stringify(res[0])); 
          this.logeado =true
          this.router.navigate(['/dashboard'])
         }else{
          this.logeado =false
          this.router.navigate(['/login'])

         }
        }
      })
    }
  // Rol = this.authService.returnRole();
}
