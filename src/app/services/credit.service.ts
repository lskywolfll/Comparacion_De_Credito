import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credit } from '../Modelo/Credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http:HttpClient) { }

  // http://localhost:9090/api/creditos/

  create(credit:Credit){
    this.http.post('http://localhost:9090/api/creditos/create',credit);
  }

  delete(id:number){
    this.http.delete(`http://localhost:9090/api/creditos/${id}`);
  }

  edit(id:number,credit:Credit){
    this.http.put(`http://localhost:9090/api/creditos/edit/${id}`, credit);
  }

  getListAll(){
    this.http.get<Credit[]>('http://localhost:9090/api/creditos/lista');
  }

  getListByMontoAndCuotas(monto:number,cuotas:number){
    this.http.get<Credit[]>(`http://localhost:9090/api/creditos/especific/${monto}/${cuotas}`);
  }

  getListByMonto(monto:number){
    this.http.get<Credit[]>(`http://localhost:9090/api/creditos/list/${monto}`);
  }

  getListIntereses(intereses:number){
    this.http.get<Credit[]>(`http://localhost:9090/api/creditos/list/${intereses}`);
  }

  getListCuotas(cuotas:number){
    this.http.get<Credit[]>(`http://localhost:9090/api/creditos/list/${cuotas}`);
  }

  getListBanco(banco:string){
    this.http.get<Credit[]>(`http://localhost:9090/api/creditos/list/${banco}`);
  }

  deleteAll(){
    this.http.delete('http://localhost:9090/api/creditos/delete/all');
  }
}
