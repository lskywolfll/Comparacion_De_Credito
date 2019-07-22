import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  
  nombre:string;
  apellido:string;
  rut:number;
  digito:string;
  fecha:string;
  genero:string;
  sueldo:number;
  email:string;
  pass:string;

  constructor( private service:RegisterService ) {}
  
  ngOnInit() {
  }

  registrarse(){

    // validaciones de campos 

    if( this.nombre.length > 3 && this.nombre.length < 10  ){

    }
    else{
      
    }

    // invoco al servicio para conectar con servidor java
    this.service.registrarEnServidor( this.nombre, this.apellido, this.rut, this.digito,
                                      this.fecha, this.genero, this.sueldo, this.email, this.pass);
  }

}
