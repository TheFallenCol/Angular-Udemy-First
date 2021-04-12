import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path:'', component:HomeComponent },
   { path:'**', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
