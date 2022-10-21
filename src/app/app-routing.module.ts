import { ControleitensComponent } from './pages/controleitens/controleitens.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProjetoComponent } from './pages/projeto/projeto.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "cadastro/usuario", component: UserComponent },
  { path: "cadastro/projeto", component: ProjetoComponent },
  { path: "cadastro/item", component: ItemComponent },
  { path: "controle/itens", component: ControleitensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
