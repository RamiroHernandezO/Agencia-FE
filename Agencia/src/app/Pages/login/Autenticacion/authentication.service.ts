import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<any>(
      currentUser ? JSON.parse(currentUser) : null
    );
    
    this.currentUser = this.currentUserSubject.asObservable();
  }
  isLoggedIn = false;
  user: any;
  role: number | undefined;
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.get<any>(`https://localhost:7263/api/Form/GetAutenticacion?usuario=${username}&contrasena=${password}`)
      .pipe(map(user => {
        this.currentUserSubject.next(user);
        return user;
      }));
  }
  public async isAuthenticated() {
    this.user = localStorage.getItem('User');
    return (this.user != null) ? true : false;

  }
  public returnRole() {
    this.user = localStorage.getItem('User');
    if (this.user != null) {
      let json = JSON.parse(this.user);
      let role = json.rolID;
      return role;
    }
  }
  
}