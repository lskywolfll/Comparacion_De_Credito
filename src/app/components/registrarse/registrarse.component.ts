import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from 'src/app/services/users.service';

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

  constructor( private service:UsersService ,private router:Router) {}
  
  ngOnInit() {
  }

  registrarse(){
    // if (this.nombre.length > 3 && this.nombre.length < 10) {
    //   console.log("Esta todo ok")
    // }else{
    //   console.log("wrong")
    // }
    console.log("Inicio")

    this.service.registrarEnServidor(this.nombre, this.apellido, (this.rut + this.digito), this.fecha_de_nacimiento, this.genero, this.sueldo, this.correo, this.password).subscribe(data =>{
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Te has registrado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(data);
    }, err =>{
      console.log("no funciona")
    }, () => this.navigate());

    console.log("Termino")
  }

  navigate(){
    this.router.navigateByUrl("/login/home")
  }
}