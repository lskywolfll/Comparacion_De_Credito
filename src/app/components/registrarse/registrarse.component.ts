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
  rut:string;
  digito:string;
  fecha_de_nacimiento:Date;
  genero:string;
  sueldo:number;
  correo:string;
  password:string;

  constructor( private service:RegisterService ) {}
  
  ngOnInit() {
  }

  // registrarse(){

  //   // validaciones de campos 

  //   if( this.nombre.length > 3 && this.nombre.length < 10  ){

  //   }
  //   else{
      
  //   }

  //   // invoco al servicio para conectar con servidor java
  //   this.service.registrarEnServidor( this.nombre, this.apellido, this.rut, this.digito,
  //                                     this.fecha, this.genero, this.sueldo, this.email, this.pass);
  // }

  registrarse(){
    // if (this.nombre.length > 3 && this.nombre.length < 10) {
    //   console.log("Esta todo ok")
    // }else{
    //   console.log("wrong")
    // }
    console.log("Inicio")

    this.service.registrarEnServidor(this.nombre, this.apellido, (this.rut + this.digito), this.fecha_de_nacimiento, this.genero, this.sueldo, this.correo, this.password).subscribe(data =>{
      console.log(data);
    });

    console.log("Termino")
  }

}
