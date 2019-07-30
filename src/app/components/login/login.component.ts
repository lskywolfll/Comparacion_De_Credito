import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor( private service:UsersService) { }

  ngOnInit() {
  }

  login(){

    // validaciones de campos 

    if( this.password.length > 5 && this.password.length < 16 ){

    }
    else{
      
    }

    // invoco al servicio para conectar con servidor java
    this.service.ingresar(this.email,this.password).subscribe(data =>{
      console.log(data)
    }, err =>{
      console.log(err)
    })
  }

}
