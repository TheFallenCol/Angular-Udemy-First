import { CustomerRoutingModule } from './customer-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { SupplierComponent } from './supplier/supplier.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    SupplierComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
