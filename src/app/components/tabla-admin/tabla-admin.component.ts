import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/Modelo/Credit';
import { CreditService } from 'src/app/services/credit.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-admin',
  templateUrl: './tabla-admin.component.html',
  styleUrls: ['./tabla-admin.component.css']
})
export class TablaAdminComponent implements OnInit {
  
  credits:Credit[];

  constructor(private service:CreditService,private router:Router) { }

  ngOnInit() {
    this.service.getListAll().subscribe(data =>{
      this.credits = data;
      console.log(data)
    }, err =>{
      console.log(err);
    })
  }

  eliminar(id:number){
    Swal.fire({
      title: 'Estas Seguro?',
      text: "Tu no podras revertir esto!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero eliminarlo!'
    }).then((result) => {
      if (result.value) {
        this.service.delete(id).subscribe(data =>{
          console.log(data);
          Swal.fire(
            'Buen Trabajo!',
            'Se ha Eliminado correctamente!',
            'success'
          )
        })
        Swal.fire(
          'Eliminado!',
          'Tu credito ha sido eliminado.',
          'success'
        )
        this.recarga();
      }
    })
    
  }

  recarga(){
    this.router.navigateByUrl("/admin/table");
  }
}
