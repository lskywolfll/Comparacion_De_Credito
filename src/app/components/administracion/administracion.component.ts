import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministracionService } from "src/app/services/administracion.service";

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  
  email:string;
  pass:string;

  constructor( private service:AdministracionService ) { }

  ngOnInit() {
  }

  
  
}
