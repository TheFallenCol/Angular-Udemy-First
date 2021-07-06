import { AuthService } from './../auth/auth.service';
import { environment } from '../../environments/environment';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getCustomerList(page:number, rows:number) : Observable<Customer[]> | null{
    return this.httpClient.get<Customer[]>(
      `${environment.apiServiceDomainURL}Customer/GetPaginatedCustomer/${page}/${rows}`
    );
  }
}
