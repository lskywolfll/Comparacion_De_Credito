import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor( private http: HttpClient) { }

  loginAdmin(nombre:string,password:string){
    
  }
}
