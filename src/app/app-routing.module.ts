import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { CreateBankComponent } from './components/create-bank/create-bank.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

const routes: Routes = [
  {path: "", component:AppComponent},
  {path: "login", component:LoginComponent},
  {path: "login/Administracion", component:AdministracionComponent},
  {path: "user/informaciones", component:InfoUserComponent},
  {path: "createCredit", component:CreateBankComponent},
  {path: "register", component:RegistrarseComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
