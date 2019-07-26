import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Modelo/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usuario:User;
  constructor(private http:HttpClient) { }

  // http://localhost:9090/ruta del proyecto backend
  Url='http://localhost:9090/api/users';

  getUsuarios(){
    this.http.get<User[]>(this.Url);
  }
}
