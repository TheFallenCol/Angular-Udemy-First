import { Role } from './../auth/role.enum';
import { AuthGuard } from './../auth/auth.guard';
import { SupplierComponent } from './supplier/supplier.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path:'', children:[
      { path:'', component:CustomerListComponent },
      { path:'supplier', component:SupplierComponent }
    ],
    canActivate:[AuthGuard],
    data: {
      expectedRole : [Role.Admin, Role.AdminProduct]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
