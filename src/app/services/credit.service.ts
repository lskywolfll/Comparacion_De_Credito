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
    return this.http.post('http://localhost:9090/api/creditos/create',credit);
  }

  delete(id:number){
    return this.http.delete(`http://localhost:9090/api/creditos/${id}`);
  }

  edit(id:number,credit:Credit){
    return this.http.put(`http://localhost:9090/api/creditos/edit/${id}`, credit);
  }

  getListAll(){
    return this.http.get<Credit[]>('http://localhost:9090/api/creditos/lista');
  }

  getListByMontoAndCuotas(monto:number,cuotas:number){
    return this.http.get<Credit[]>(`http://localhost:9090/api/creditos/especific/${monto}/${cuotas}`);
  }

  getListByMonto(monto:number){
    return this.http.get<Credit[]>(`http://localhost:9090/api/creditos/list/${monto}`);
  }

  getListIntereses(intereses:number){
    return this.http.get<Credit[]>(`http://localhost:9090/api/creditos/list/${intereses}`);
  }

  getListCuotas(cuotas:number){
    return this.http.get<Credit[]>(`http://localhost:9090/api/creditos/list/${cuotas}`);
  }

  getListBanco(banco:string){
    return this.http.get<Credit[]>(`http://localhost:9090/api/creditos/list/${banco}`);
  }

  deleteAll(){
    return this.http.delete('http://localhost:9090/api/creditos/delete/all');
  }
}
