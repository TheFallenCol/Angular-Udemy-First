import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  constructor(private customerService: CustomerService) {
    this.getCustomer(1,20);
  }

  ngOnInit(): void {
  }

  getCustomer(page:number, rows:number): void{
    this.customerService.getCustomerList(page,rows)?.subscribe(response =>
      this.customers = response);
  }
}
