import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // email:string;
  // password:string;

  constructor( private service:UsersService,private router:Router) { }

  ngOnInit() {
  }

  login(password:string,email:string,event:Event){
    event.preventDefault();
    // validaciones de campos 

    if(password != null && email != null){
      // invoco al servicio para conectar con servidor java
      this.service.ingresar(password,email).subscribe(data =>{
        console.log(data)
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
    this.router.navigateByUrl('/home');
  }
}
