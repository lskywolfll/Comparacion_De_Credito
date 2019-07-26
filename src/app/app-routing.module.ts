import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { CreateBankComponent } from './components/create-bank/create-bank.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { HomeComponent } from './components/home/home.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { PasswordComponent } from './components/password/password.component';
import { EditEjecutivoComponent } from "./components/edit-ejecutivo/edit-ejecutivo.component";
import { HomeEjecutivoComponent } from "./components/home-ejecutivo/home-ejecutivo.component";
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { CompararCreditoComponent } from './components/comparar-credito/comparar-credito.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "login/Administracion", component:AdministracionComponent},
  {path: "user/informaciones", component:InfoUserComponent},
  {path: "createCredit", component:CreateBankComponent},
  {path: "register", component:RegistrarseComponent},
  {path: "password", component:PasswordComponent},
  {path: "login/home", component:HomeUserComponent },
  {path: "compararCredito" , component:CompararCreditoComponent},
  {path: "**", component:HomeComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
