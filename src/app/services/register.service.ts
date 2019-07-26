import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http:HttpClient ) { }
  // Las propiedades son iguales con el nombre que estan definidas en el backend
  registrarEnServidor(/*nombre:string, apellido:string, rut:string, fecha_de_nacimiento:Date, genero:string, sueldo_bruto:number, correo:string, password:string*/user){
    return this.http.post("http://localhost:9090/api/users/createUser",/*{
      // Parametros para enviarlo a ala api(en la base de datos)
      nombre:nombre,
      apellido:apellido,
      rut:rut,
      fecha_de_nacimiento:fecha_de_nacimiento,
      genero:genero,
      sueldo_bruto:sueldo_bruto,
      correo:correo,
      password:password
    }*/user)
  }

}
