import { HomeModule } from './home/home.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path:'', component:HomeModule },
   { path:'**', component:HomeModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
