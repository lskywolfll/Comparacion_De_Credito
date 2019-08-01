import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HistorialComponent } from './components/historial/historial.component';
import { TarjetasDeBancoComponent } from './components/tarjetas-de-banco/tarjetas-de-banco.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { AspectosDeMejoraComponent } from './components/aspectos-de-mejora/aspectos-de-mejora.component';
import { EjecutivoComponent } from './components/ejecutivo/ejecutivo.component';
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
import { HomeComponent } from './components/home/home.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { AdministracionService } from './services/administracion.service';
import { PasswordComponent } from './components/password/password.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeEjecutivoComponent } from './components/home-ejecutivo/home-ejecutivo.component';
import { UsersService } from './services/users.service';
import { UserHistorialComponent } from './components/user-historial/user-historial.component';
import { TablaUserComponent } from './components/tabla-user/tabla-user.component';
import { TablaEjecutivoComponent } from './components/tabla-ejecutivo/tabla-ejecutivo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HistorialComponent,
    TarjetasDeBancoComponent,
    QuienesSomosComponent,
    AspectosDeMejoraComponent,
    EjecutivoComponent,
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
    AdministracionComponent,
    HomeComponent,
    HomeUserComponent,
    PasswordComponent,
    HomeAdminComponent,
    HomeEjecutivoComponent,
    UserHistorialComponent,
    TablaUserComponent,
    TablaEjecutivoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UsersService,
    AdministracionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
