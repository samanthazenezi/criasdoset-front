import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { ControleitensComponent } from './pages/controleitens/controleitens.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProjetoComponent } from './pages/projeto/projeto.component';
import { UserComponent } from './pages/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { PasswordComponent } from './pages/password/password.component';
import { CadastroRadioComponent } from './pages/cadastro-radio/cadastro-radio.component';
import { TitleComponent } from './components/title/title.component';
import { ErroComponent } from './pages/erro/erro.component';
import { FormradioComponent } from './pages/formradio/formradio.component';
import { SucessRequerimentoComponent } from './pages/sucess-requerimento/sucess-requerimento.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ControleitensComponent,
    HomeComponent,
    ItemComponent,
    LoginComponent,
    PerfilComponent,
    ProjetoComponent,
    UserComponent,
    PasswordComponent,
    CadastroRadioComponent,
    TitleComponent,
    ErroComponent,
    FormradioComponent,
    SucessRequerimentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
