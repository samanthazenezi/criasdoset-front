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

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AutenticacaoGuard] },
  { path: "login", component: LoginComponent },
  { path: "perfil", component: PerfilComponent, canActivate: [AutenticacaoGuard] },
  { path: "cadastro/usuario", component: UserComponent, canActivate: [AutenticacaoGuard] },
  { path: "cadastro/projeto", component: ProjetoComponent, canActivate: [AutenticacaoGuard] },
  { path: "cadastro/item", component: ItemComponent, canActivate: [AutenticacaoGuard] },
  { path: "controle/itens", component: ControleitensComponent, canActivate: [AutenticacaoGuard] },
  { path: "usuario/ativacao/:token", component: PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
