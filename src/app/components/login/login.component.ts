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

  constructor( private service:UsersService,private router:Router) { }

  ngOnInit() {
  }

  login(){
    // event.preventDefault();
    // validaciones de campos 

    if(this.password != null && this.correo != null){
      // invoco al servicio para conectar con servidor java
      this.service.ingresar(this.correo,this.password).subscribe(data =>{
        console.log(data)
        // let u:User = this.service.logged(this.correo,this.password);
        // this.service.setUserLogedIn(u);
      }, err =>{
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Tus datos no son validos y/o no existen!',
          // footer: '<a href>Por que ocurre esto?</a>'
        })
        console.log(err)
      },() => this.navigate()
      ); 
    }
    else{
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'No se ha ingresado correctamente los datos!',
        // footer: '<a href>Por que ocurre esto?</a>'
      })
    }
  }

  navigate(){
    this.router.navigateByUrl('/login/home');
  }
}
