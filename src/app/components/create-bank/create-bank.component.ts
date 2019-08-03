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

  banco:string;
  monto:number;
  intereses:number;
  cae:number;
  cuotas:number;

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

  // ------- IMG PREVIEW ---------

  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Solo se admiten imágenes.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}

