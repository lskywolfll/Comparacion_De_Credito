import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient) { }

  // http://localhost:9090/ruta del proyecto backend
  deleteAll(){
    return this.http.delete("http://localhost:9090/api/users/delete/all");
  }

  registrarEnServidor(nombre:string, apellido:string, rut:string, fecha_de_nacimiento:Date, genero:string, sueldo:number, correo:string, password:string){
    return this.http.post("http://localhost:9090/api/users/createUser",{
      // Parametros para enviarlo a ala api(en la base de datos)
      nombre:nombre,
      apellido:apellido,
      rut:rut,
      fecha_de_nacimiento:fecha_de_nacimiento,
      genero:genero,
      sueldo_bruto:sueldo,
      correo:correo,
      password:password
    })
  }

  ingresar(correo:string,password:string){
    return this.http.post("http://localhost:9090/api/users/login",{
      correo:correo,
      password:password
    })
  }

  
}
