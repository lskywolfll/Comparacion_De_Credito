import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  loginPost( email:string, pass:string){

    return this.http.post( 'localhost:4200', {email:email, pass:pass});
    
  };
}
