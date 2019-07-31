import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  constructor(private service:UsersService) { }

  ngOnInit() {
  }

  verificar(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Tu no podras revertir esto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si Eliminar ?'
    }).then((result) => {
      if (result.value) {
        this.service.deleteAll().subscribe(data =>{
          console.log(data)
        }, err =>{
          console.log(err)
        })
        Swal.fire(
          'Eliminado!',
          'Tu usuario ha sido eliminado.',
          'success'
        )
      }
    })
  }

}
