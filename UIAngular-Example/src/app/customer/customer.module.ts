import { CustomerRoutingModule } from './customer-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { SupplierComponent } from './supplier/supplier.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CustomerListComponent,
    SupplierComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CustomerModule { }
