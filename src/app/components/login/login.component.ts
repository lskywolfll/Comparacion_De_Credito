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

  navigate(){
    this.router.navigateByUrl('/login/home');
  }

  enviarDatos(user){
    if(user != null){
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
          Swal.fire({
            position: 'top-left',
            type: 'success',
            title: 'Se ha logeado correctamente',
            showConfirmButton: false,
            timer: 3000
          })
        })
      } catch (e) {
        console.log(e);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Algo ha salido mal!',
          footer: '<strong>Parece que no cumpliste con los requirimientos y/o no existe tu usuario</strong>'
        })
      }
      
    }
  }

  
}
