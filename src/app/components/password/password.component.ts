import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/Modelo/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  users:User[];

  constructor(private router:Router, private service:UsersService) { 
    
  }

  ngOnInit() {
    this.service.listUsers().subscribe(data =>{
      this.users = data;
      console.log(data)
    }, err =>{
      console.log(err);
    })
  }

  editar(){
    let nombre:string;
    let apellido:String;
    let password:string;
    let rut:string;
    let fecha_de_nacimiento:Date;
    let genero:string;
    let sueldo_bruto;
    //TErminar experimento
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: [nombre,apellido,password,rut,fecha_de_nacimiento,genero,sueldo_bruto]
    }).queue([
      {
        title: 'Nombre ?',
        text: 'El nombre ingresado modificara'
      },
      'Apellido ?',
      'rut ?',
      {
        title: 'Fecha de nacimiento ?',
        text: 'ej: 25/07/1999'
      },
      'genero ?'
    ]).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'All done!',
          html:
            'Your answers: <pre><code>' +
              JSON.stringify(result.value) +
            '</code></pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

  eliminar(rut:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.service.deleteUser(rut).subscribe(data =>{
          console.log(data)
        },err =>{
          console.log(err)  
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })
      }
    })
    
  }
}
