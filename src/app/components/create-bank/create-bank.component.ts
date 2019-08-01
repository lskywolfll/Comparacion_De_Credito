import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/services/credit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {

  constructor(private service:CreditService, private router:Router) { }

  ngOnInit() {
  }

  
}
