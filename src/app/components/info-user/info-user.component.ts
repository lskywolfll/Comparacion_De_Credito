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

  eliminarUsuarios(){
    this.service.deleteAll().subscribe(data =>{
      console.log(data)
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Se ha eliminado satisfactoriamente',
        showConfirmButton: false,
        timer: 1500
      })
    }, err =>{
      console.log(err);
    })
  }
}
