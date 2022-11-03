import { CadastroRadioComponent } from './pages/cadastro-radio/cadastro-radio.component';
import { PasswordComponent } from './pages/password/password.component';
import { ControleitensComponent } from './pages/controleitens/controleitens.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProjetoComponent } from './pages/projeto/projeto.component';
import { UserComponent } from './pages/user/user.component';
import { AutenticacaoGuard } from './guard/autenticacao.guard';
import { UsertokenGuard } from './guard/usertoken.guard';
import { ErroComponent } from './pages/erro/erro.component';
import { FormradioComponent } from './pages/formradio/formradio.component';
import { ItemGuard } from './guard/item.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "perfil", component: PerfilComponent, canActivate: [AutenticacaoGuard] },
  { path: "cadastro/usuario", component: UserComponent, canActivate: [AutenticacaoGuard] },
  { path: "cadastro/projeto", component: ProjetoComponent, canActivate: [AutenticacaoGuard] },
  { path: "cadastro/item", component: ItemComponent, canActivate: [AutenticacaoGuard] },
  { path: "", component: ControleitensComponent, canActivate: [AutenticacaoGuard] },
  { path: "usuario/ativacao/:token", component: PasswordComponent, canActivate: [UsertokenGuard]},
  { path: "cadastro/radio", component: CadastroRadioComponent, canActivate: [AutenticacaoGuard]},
  { path: "erro", component: ErroComponent},
  { path: "requerimento/radio/:token", component: FormradioComponent, canActivate: [ItemGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
