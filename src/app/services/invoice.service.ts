import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Invoice} from "../model/invoice";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private readonly BASE_URL = 'https://invoice-backend-i5iocka57a-ey.a.run.app/';

  constructor(private http: HttpClient) {
  }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.BASE_URL}invoices`);
  }

  addInvoice(invoice: Invoice) {
    this.http.post(`${this.BASE_URL}invoices`, invoice, {
      headers: {
        ContentType: 'application/json'
      }
    }).subscribe(result => console.log(result));
  }
}


