import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Modelo/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private isUserLoggedIn;
  // private userLogged:User;

  constructor(private http: HttpClient) { 
    // this.isUserLoggedIn = false;
  }

  // //Mantener sesion
  // setUserLogedIn(user:User){
  //   this.isUserLoggedIn = true;
  //   this.userLogged = user;
  //   // Palabra clave y valor setItem("clave",valor)
  //   localStorage.setItem('currentUser', JSON.stringify(user));
  // }

  // getUserLogeedIn(){
  //   return JSON.parse(localStorage.getItem('currentUser'));
  // }

  // http://localhost:9090/ruta del proyecto backend

  registrarEnServidor(nombre: string, apellido: string, rut: string, fecha_de_nacimiento: Date, genero: string, sueldo: number, correo: string, password: string) {
    return this.http.post("http://localhost:9090/api/users/createUser", {
      // Parametros para enviarlo a ala api(en la base de datos)
      nombre: nombre,
      apellido: apellido,
      rut: rut,
      fecha_de_nacimiento: fecha_de_nacimiento,
      genero: genero,
      sueldo_bruto: sueldo,
      correo: correo,
      password: password
    })
  }

  login(user) {
    return this.http.post<User>(`http://localhost:9090/api/users/login`, user)
  }
  //`` -> sirve para poder usar las funciones ES6 para poder usar una forma de concatenacion con variables de forma mas sencilla ej:var nombre = "name" y console.log(`mi nombre es${nombre}`), ${variable}
  deleteUser(rut: string) {
    return this.http.delete(`http://localhost:9090/api/users/${rut}`)
  }

  deleteAll() {
    return this.http.delete("http://localhost:9090/api/users/delete/all");
  }

  listUsers() {
    return this.http.get<User[]>("http://localhost:9090/api/users/lista");
    // return this.http.get("http://localhost:9090/api/users/lista")
  }

}
