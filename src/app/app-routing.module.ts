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
import { HistorialComponent } from "./components/historial/historial.component";
import { UserHistorialComponent } from "./components/user-historial/user-historial.component";
import { QuienesSomosComponent } from "./components/quienes-somos/quienes-somos.component";
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { TablaUserComponent } from './components/tabla-user/tabla-user.component';
import { TablaEjecutivoComponent } from './components/tabla-ejecutivo/tabla-ejecutivo.component';
import { TablaAdminComponent } from './components/tabla-admin/tabla-admin.component';
import { QuienesSomosUserComponent } from './components/quienes-somos-user/quienes-somos-user.component';
import { UserCompararCreditoComponent } from './components/user-comparar-credito/user-comparar-credito.component';
import { EjecutivoCompararCreditoComponent } from './components/ejecutivo-comparar-credito/ejecutivo-comparar-credito.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "login/Administracion", component:AdministracionComponent},
  {path: "user/informaciones", component:InfoUserComponent},
  {path: "createCredit", component:CreateBankComponent},
  {path: "register", component:RegistrarseComponent},
  {path: "password", component:PasswordComponent},
  {path: "user/home", component:HomeUserComponent },
  {path: "compararCredito" , component:CompararCreditoComponent},
  {path: "admin/historial", component:HistorialComponent},
  {path: "user/historial", component:UserHistorialComponent},
  {path: "sobreNosotros", component:QuienesSomosComponent},
  {path: "preguntasFrecuentes", component:PreguntasFrecuentesComponent},
  {path: "user/table", component:TablaUserComponent},
  {path: "ejecutivo/table", component:TablaEjecutivoComponent},
  {path: "admin/table", component:TablaAdminComponent},
  {path: "user/sobreNosotros", component:QuienesSomosUserComponent},
  {path: "user/compararCredito", component:UserCompararCreditoComponent},
  {path: "ejecutivo/compararCredito", component:EjecutivoCompararCreditoComponent},
  {path: "**", component:HomeComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
