import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path:'home', loadChildren: () => import ('./home/home.module').then(m => m.HomeModule) },
   { path:'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
   { path:'login', component:LoginComponent },
   { path:'logout', component:LogoutComponent },
   { path:'', redirectTo:'/login', pathMatch:'full' },
   { path:'**', component:NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
