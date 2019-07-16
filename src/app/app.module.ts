import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HistorialComponent } from './components/historial/historial.component';
import { TarjetasDeBancoComponent } from './components/tarjetas-de-banco/tarjetas-de-banco.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { AspectosDeMejoraComponent } from './components/aspectos-de-mejora/aspectos-de-mejora.component';
import { EjecutivoComponent } from './components/ejecutivo/ejecutivo.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { CompararCreditoComponent } from './components/comparar-credito/comparar-credito.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { UsersComponent } from './components/users/users.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { InfoUserComponent } from './components/info-user/info-user.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { EditEjecutivoComponent } from './components/edit-ejecutivo/edit-ejecutivo.component';
import { EstadisticasDeUsoComponent } from './components/estadisticas-de-uso/estadisticas-de-uso.component';
import { EditAdministradorComponent } from './components/edit-administrador/edit-administrador.component';
import { CreateBankComponent } from './components/create-bank/create-bank.component';
import { AdministracionComponent } from './components/administracion/administracion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HistorialComponent,
    TarjetasDeBancoComponent,
    QuienesSomosComponent,
    AspectosDeMejoraComponent,
    EjecutivoComponent,
    AdministradorComponent,
    CompararCreditoComponent,
    RegistrarseComponent,
    UsersComponent,
    NewUserComponent,
    InfoUserComponent,
    PreguntasFrecuentesComponent,
    EditEjecutivoComponent,
    EstadisticasDeUsoComponent,
    EditAdministradorComponent,
    CreateBankComponent,
    AdministracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
