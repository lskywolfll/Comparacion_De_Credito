import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-comparar-credito',
  templateUrl: './comparar-credito.component.html',
  styleUrls: ['./comparar-credito.component.css']
})
export class CompararCreditoComponent implements OnInit {

  constructor(private home: HomeComponent) { }

  ngOnInit() {
  }

  estadisticas(){
    this.home.router.navigate(["compararCredito/estadisticas-uso"],{relativeTo: this.home.route});
  }
  aspectosDeMejora(){
    this.home.router.navigate(["compararCredito/aspectosDeMejora"],{relativeTo: this.home.route});
  }

}
