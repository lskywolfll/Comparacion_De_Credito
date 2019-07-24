import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http:HttpClient ) { }

  // registrarEnServidor( nombre:string, apellido:string, rut:number, digito:string, fecha:string,
  //                      genero:string, sueldo:number, email:string, pass:string ){
                   
  //   return this.http.post( "localhost:4200", { nombre:nombre, apellido:apellido, rut:rut, digito:digito,
  //                                              fecha:fecha, genero:genero, sueldo:sueldo, email:email, pass:pass} );
  // }

  registrarEnServidor(nombre:string, apellido:string, rut:string, fecha_de_nacimiento:Date, genero:string, sueldo:number, correo:string, password:string){
    return this.http.post("http://localhost:9090/api/users/createUser",{
      // Parametros para enviarlo a ala api(en la base de datos)
      nombre:nombre,
      apellido:apellido,
      rut:rut,
      fecha_de_nacimiento:fecha_de_nacimiento,
      genero:genero,
      sueldo:sueldo,
      correo:correo,
      password:password
    })
  }

}
