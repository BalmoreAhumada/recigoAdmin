import { Injectable } from '@angular/core';
import { User } from '../auth/interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environments } from '../../environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user?: User;
  private baseUrl = environments.baseUrl;
  constructor(private http: HttpClient) { }


  get currentUser():User| undefined{
    if(!this.user) return undefined;
    return structuredClone( this.user);
  }

  login(email: string, password: string): Observable<User> {

    //http.post('login', {email,password});

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(user=> localStorage.setItem('token', user.id.toString())),
      );
  }


  logout(){
    this.user = undefined;
    localStorage.clear();
  }
}
