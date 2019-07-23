import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email:string;
  pass:string;

  constructor( private service:LoginService) { }

  ngOnInit() {
  }

  login(){

    // validaciones de campos 

    if( this.pass.length > 5 && this.pass.length < 17  ){

    }
    else{
      
    }

    // invoco al servicio para conectar con servidor java
    this.service.loginPost( this.email, this.pass );
  }

}
