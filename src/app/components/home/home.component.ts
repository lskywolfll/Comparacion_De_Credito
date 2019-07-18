import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,public route:ActivatedRoute) { }

  ngOnInit() {
  }

  compararCredito(){
    this.router.navigate(["compararCredito"],{relativeTo:this.route});
  }

  preguntasFrecuentes(){
    this.router.navigate(["preguntasFrecuentes"],{relativeTo:this.route});
  }
}
