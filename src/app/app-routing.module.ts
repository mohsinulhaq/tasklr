import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleComponent } from './module/module.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':module', component: ModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
