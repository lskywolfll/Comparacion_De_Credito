import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http:HttpClient ) { }

  registrarEnServidor( nombre:string, apellido:string, rut:number, digito:string, fecha:string,
                       genero:string, sueldo:number, email:string, pass:string ){
                   
    return this.http.post( "localhost:4200", { nombre:nombre, apellido:apellido, rut:rut, digito:digito,
                                               fecha:fecha, genero:genero, sueldo:sueldo, email:email, pass:pass} );

  }
}
