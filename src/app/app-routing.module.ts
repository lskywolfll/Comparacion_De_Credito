import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { CreateBankComponent } from './components/create-bank/create-bank.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { HomeComponent } from './components/home/home.component';
import { CompararCreditoComponent } from './components/comparar-credito/comparar-credito.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { EstadisticasDeUsoComponent } from './components/estadisticas-de-uso/estadisticas-de-uso.component';
import { AspectosDeMejoraComponent } from './components/aspectos-de-mejora/aspectos-de-mejora.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children:[
      {path:"compararCredito", component: CompararCreditoComponent},
      {path:"preguntasFrecuentes", component: PreguntasFrecuentesComponent},
      {path: "compararCredito/estadisticas-uso", component: EstadisticasDeUsoComponent},
      {path: "compararCredito/aspectosDeMejora",component:AspectosDeMejoraComponent}
    ]
  },
  {path: "login", component:LoginComponent},
  {path: "Administracion", component:AdministracionComponent},
  {path: "user/informaciones", component:InfoUserComponent},
  {path: "createCredit", component:CreateBankComponent},
  {path: "register", component:RegistrarseComponent},
  {path: "**", component:LoginComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
