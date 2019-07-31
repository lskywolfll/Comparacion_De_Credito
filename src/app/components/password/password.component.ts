import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/Modelo/User';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  user:User[];

  constructor(private router:Router, private service:UsersService) { 
    
  }

  ngOnInit() {
    this.service.listUsers().subscribe(data =>{
      
      console.log(data)
    }, err =>{
      console.log(err);
    })
  }

}
