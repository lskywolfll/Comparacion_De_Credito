import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/Modelo/Credit';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-tabla-admin',
  templateUrl: './tabla-admin.component.html',
  styleUrls: ['./tabla-admin.component.css']
})
export class TablaAdminComponent implements OnInit {

  constructor(private service:CreditService) { }

  ngOnInit() {
    this.service.getListAll().subscribe(data =>{
      this.credits = data;
      console.log(data)
    }, err =>{
      console.log(err);
    })
  }

  credits:Credit[];


}
