import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/Modelo/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  correo:string;
  password:string;
  error:string;
  user:User;

  constructor( private service:UsersService,private router:Router) { }

  ngOnInit() {
  }

  // login(correo:string,password:string, event:Event){
  //   event.preventDefault();
  //   // validaciones de campos 

  //   if(password != null && correo != null){
  //     // invoco al servicio para conectar con servidor java
  //      this.service.login(correo,password).subscribe(data =>{
  //       console.log(data)
  //       // let u:User = data.user;
  //       // this.service.setUserLogedIn(u);
  //     }, err =>{
  //       Swal.fire({
  //         type: 'error',
  //         title: 'Oops...',
  //         text: 'Tus datos no son validos y/o no existen!',
  //         // footer: '<a href>Por que ocurre esto?</a>'
  //       })
  //       console.log(err)
  //     },() => this.navigate()
  //     ); 
  //   }
  //   else{
  //     Swal.fire({
  //       type: 'error',
  //       title: 'Oops...',
  //       text: 'No se ha ingresado correctamente los datos!',
  //       // footer: '<a href>Por que ocurre esto?</a>'
  //     })
  //   }
  // }

  navigate(){
    this.router.navigateByUrl('/login/home');
  }

  enviarDatos(user){
    this.user = user;
    this.user.correo = user.correo;
    this.user.password = user.password;
    console.log("email: " + user.correo);
    let correo = this.user.correo;
    try {
      this.service.login(user).subscribe(data =>{
        let user = data;
        if(user == null){
          this.error = 'Correo o contraseña incorrecto'
        }else{
          this.user = user;
          localStorage.setItem("nombre", this.user.nombre);
          localStorage.setItem("apellido",this.user.apellido);
          localStorage.setItem("rut", this.user.rut);
          localStorage.setItem("genero", this.user.genero);
          localStorage.setItem("correo", correo);
          localStorage.setItem("sueldo_bruto", this.user.sueldo_bruto.toFixed());
        }
      })
    } catch (e) {
      console.log(e);
    }
  }
}
