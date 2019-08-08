import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministracionService } from "src/app/services/administracion.service";
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/Modelo/User';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  
  user:User;
  nombre:string;
  password:string;

  constructor( private service:UsersService,private router:Router) { }

  ngOnInit() {
    this.service.registrarEnServidor("ejecutivo",null,null,null,null,null,null,"123").subscribe(data =>{console.log(data)},err =>{console.log(err)});
    this.service.registrarEnServidor('admin',null,null,null,null,null,null,'123').subscribe(data =>{console.log(data)},err =>{console.log(err)});
  }

  admin(){
    this.router.navigateByUrl("admin/home")
  }
  
  ejecutivo(){
    this.router.navigateByUrl("ejecutivo/home")
  }

  ingresar(user){
    if(user != null){
      this.user = user;
      this.user.nombre = user.nombre;
      this.user.password = user.password;
      console.log("Nombre: " + user.nombre)
      try {
        this.service.loginAdministracion(user).subscribe(
          data =>{
            console.log(data);
            if(this.user.nombre == 'admin'){
              this.admin();
            }

            if (this.user.nombre == 'ejecutivo') {
              this.ejecutivo();
            }
          }
        )
      } catch (error) {
        console.log(error);
      }
    }
  }
}
