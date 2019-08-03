import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/services/credit.service';
import { Router } from '@angular/router';
import { Credit } from 'src/app/Modelo/Credit';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {

  constructor(private service:CreditService, private router:Router) { }

  ngOnInit() {
  }

  credit:Credit;

  crearCredit(credit){
    this.credit = credit;
    try {
      this.service.create(credit).subscribe(data=>{
        console.log(data);
      },err =>{
        console.log(err)
      })
    } catch (e) {
      console.log(e)
    }
  }
}
