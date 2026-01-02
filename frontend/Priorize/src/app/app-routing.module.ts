import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaDashboardComponent } from './components/tela-dashboard/tela-dashboard.component';
import { TelaCriarTasksComponent } from './components/tela-criar-tasks/tela-criar-tasks.component';
import { TelaTasksComponent } from './components/tela-tasks/tela-tasks.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';


const routes: Routes = [
  {path:'',component: TelaDashboardComponent},
  {path:'dashboard',component: TelaDashboardComponent},
  
  {path:'tasks', component: TelaTasksComponent},
  {path:'tasks/criar-task', component: TelaCriarTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
