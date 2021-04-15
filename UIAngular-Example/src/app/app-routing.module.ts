import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path:'home', loadChildren:'./home/home.module#HomeModule' },
   { path:'customer', loadChildren:'./customer/customer.module#CustomerModule' },
   { path:'', redirectTo:'home', pathMatch:'full' },
   { path:'**', component:NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
