import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor( private http: HttpClient) { }

  administracionPost( email:string, pass:string){

    return this.http.post( 'localhost:8080', {email:email, pass:pass});
    
  };
}
